<script lang="ts">
  let isNight = false;
</script>

<c>Day/Night Mod</c>
<!-- c means nothing , just for tag to convert color -->
<button
  class="btn btn-primary"
  on:click={() => {
    isNight = !isNight;
  }}
>
  {!isNight ? "to night" : "to day"}
</button>
{#if isNight}
  <style>
    :not(#jxgbox > *) {
      /* https://www.html.cn/qa/css3/10358.html */
      /* https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not */
      filter: invert(100%);
    }
  </style>
{/if}
