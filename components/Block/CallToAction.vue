<template>
    <div class="call-to-action">

        <div class="inner-wrapper">
            <div class="call-to-action__content">
                <h2 v-html="props.title "></h2>
                <p v-html="props.subtitle"></p>
            </div>

            <div class="call-to-action__image">
                <picture class="image-holder">
                    <nuxt-img :src="props.image.url" :alt="props.image.alt" sizes="xs:100vw md:50vw xl:800px xxl:1600px xxxl:2560px" quality="100" loading="lazy" />
                </picture>
            </div>

            <div class="call-to-action__links">
                <NuxtLink :to="props.link.url" class="main-btn main-btn--alt">{{ props.link.title }}</NuxtLink>
                <ul class="socialmedia">
                    <li v-for="(social, index) in props.socialmedia" :key="index">
                        <NuxtLink :to="social.url" :title="social.title" target="_blank">
                            <span v-html="social.icon"></span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>
const { props } = defineProps(['props']);
</script>
