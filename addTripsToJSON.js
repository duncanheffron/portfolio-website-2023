const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const slugify = require('slugify');

// Set the paths for trips directory
const tripsDir = path.resolve(__dirname, 'content/trips');

// Function to compress and convert images to WebP format
const compressAndConvertImages = async (sourcePath, targetPath) => {
  await sharp(sourcePath)
    .rotate() // Auto-rotate based on the EXIF Orientation tag
    .resize(2560) // Adjust the resize dimensions as needed
    .toFormat('webp') // Set the output format to WebP
    .webp({ quality: 80 }) // Set the WebP quality level
    .toFile(targetPath);
};

// Function to rename image file
const renameImageFile = async (sourcePath, targetPath) => {
  await fs.promises.rename(sourcePath, targetPath);
};

// Function to add/remove image information to/from trip JSON files
const updateImageInfoInTrips = async () => {
  // Read trip files in the trips directory
  const tripFiles = fs.readdirSync(tripsDir);

  // Initialize progress indication variables
  let totalImages = 0;
  let processedImages = 0;

  for (const file of tripFiles) {
    if (path.extname(file) === '.json' && file !== 'index.json') {
      const tripFilePath = path.join(tripsDir, file);
      const tripData = require(tripFilePath);

      // Get the image folder name from tripData
      const imageFolderName = tripData.image_folder_name;
      const photoBookFolder = path.join(__dirname, `public/images/trips/${imageFolderName}/photo-book`);

      if (fs.existsSync(photoBookFolder)) {
        // Read images in the photo-book folder
        const images = fs.readdirSync(photoBookFolder);

        // Update the total number of images
        totalImages += images.length;

        // Retrieve existing images from tripData
        const existingImages = tripData?.blocks?.find(block => block.componentName === 'BlockPhotoBook')?.props?.images || [];

        // Filter out non-image files
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Add more extensions if needed
        const filteredImages = images.filter(image => {
          const extension = path.extname(image).toLowerCase();
          return imageExtensions.includes(extension);
        });

        // Filter out images that no longer exist
        const updatedImages = existingImages.filter(image => {
          const imageName = path.basename(image.url);
          return filteredImages.includes(imageName);
        });

        // Add new images that are not already present
        for (const image of filteredImages) {
          const imageName = path.basename(image);
          const existingImage = existingImages.find(img => path.basename(img.url) === imageName);
          if (!existingImage) {
            const sourceImagePath = path.join(photoBookFolder, imageName);
            const tripTitle = tripData.title;
            const slug = slugify(tripTitle, { lower: true, remove: /[*+~.()'"!:@]/g });
            const targetImageName = `${slug}-${updatedImages.length + 1}.webp`;
            const targetImagePath = path.join(photoBookFolder, targetImageName);

            // Update the progress indication
            processedImages++;
            console.clear();
            console.log(`Trip: ${tripData.title}`);
            console.log(`Progress: ${processedImages}/${totalImages}`);

            // Compress and convert image to WebP format
            await compressAndConvertImages(sourceImagePath, targetImagePath);

            // Rename the original image file
            const targetOriginalImageName = `${slug}-${updatedImages.length + 1}${path.extname(image)}`;
            const targetOriginalImagePath = path.join(photoBookFolder, targetOriginalImageName);
            await renameImageFile(sourceImagePath, targetOriginalImagePath);

            updatedImages.push({
              url: `/images/trips/${imageFolderName}/photo-book/${targetImageName}`,
              alt: tripTitle
            });
          }
        }

        // Update tripData with updated images
        const blockPhotoBook = tripData.blocks.find(block => block.componentName === 'BlockPhotoBook');
        if (blockPhotoBook) {
          blockPhotoBook.props.images = updatedImages;
        } else {
          tripData.blocks.push({
            componentName: 'BlockPhotoBook',
            props: {
              images: updatedImages
            }
          });
        }

        // Write tripData back to the JSON file
        fs.writeFileSync(tripFilePath, JSON.stringify(tripData, null, 2));
      }
    }
  }

  console.log('Image information has been updated in trip JSON files.');
};

// Call the function to update image information in trip JSON files
updateImageInfoInTrips();
