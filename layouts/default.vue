<template>
  <div>
<div class="h-10 md:h-[64px] bg-grey"></div>
<div class="mx-auto  px-4">
  <slot/>
</div>
<footer class="h-[54px] md:h-[104px] bg-grey"></footer>

  </div>
    <client-only>
          <notifications
            position="top rightn"
            ignore-duplicates
          />
        </client-only>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>