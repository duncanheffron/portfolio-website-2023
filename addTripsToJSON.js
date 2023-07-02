const fs = require('fs');
const path = require('path');

// Set the paths for trips directory
const tripsDir = path.resolve(__dirname, 'content/trips');

// Function to add/remove image information to/from trip JSON files
const updateImageInfoInTrips = () => {
  // Read trip files in the trips directory
  const tripFiles = fs.readdirSync(tripsDir);

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
            updatedImages.push({
              url: `/images/trips/${imageFolderName}/photo-book/${imageName}`,
              alt: `Image of ${tripData.title}`
            });
          }
        }

        // Update the tripData with the new images
        tripData.blocks = [
          {
            componentName: 'BlockPhotoBook',
            props: {
              images: updatedImages
            }
          }
        ];

        // Write the updated tripData back to the JSON file
        fs.writeFileSync(tripFilePath, JSON.stringify(tripData, null, 2));
        console.log(`Image information updated in ${file}`);
      }
    }
  }
};

// Call the function to update image information in trip JSON files
updateImageInfoInTrips();
