<template>
  <div id="default-layout">
      <slot />
      <div class="inner-container">
          <BlockCallToAction :props="content.call_to_action" />
      </div>
      <footer class="footer">
        <div class="inner-container">

            <div class="footer__brand">
                <NuxtLink to="/"><span class="text-highlight">Duncan</span> Heffron</NuxtLink>
            </div>

            <div class="footer__nav">
                <ul>
                    <li><NuxtLink to="/projects">Projects</NuxtLink></li>
                    <li><NuxtLink to="/trips">Trips</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
            </div>

        </div>
      </footer>
  </div>
</template>

<script>
import footerContent from '~/content/footer.json'

export default {
  data() {
    return {
      content: footerContent
    }
  }
}
</script>
