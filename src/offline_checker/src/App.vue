<template>
  <div id="app" class="no-select">
    <router-view @changeBodyColor="changeBodyColor"/>
  </div>
</template>

<script>
  import 'normalize.css';

  export default {
    name: 'app',
    data() {
      return {
        firstBackgroundChangeRequested: false
      };
    },
    methods: {
      changeBodyColor(color) {
        // TODO: Refactor this code mess
        console.log(color);
        if (this.firstBackgroundChangeRequested) {
          document.body.classList.add('transition__background-color');
        }
        document.body.style.backgroundColor = color;
        this.firstBackgroundChangeRequested = true;
      }
    },
    mounted() {
      window.onerror = (messageOrEvent, source, lineno, colno, error) => {
        console.log('Error');
      };
    }
  };
</script>

<style>
  html, body {
    /* Not necessary because normilze.css includes this*/
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

    overflow: hidden;
  }

  .transition__background-color {
    transition: background-color 2s;
  }

  #app {
    width: 100%;
    height: 100%;
    transform: translate3d(0, 0, 0);

    font-family: Roboto, Arial, sans-serif;
  }

  * {
    /* Hide overflow on all elements */
    overflow: hidden;
  }

  /* Source: https://css-tricks.com/almanac/properties/u/user-select/ */
  .no-select {
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none; /* Likely future */

  }

  /* Source: https://css-tricks.com/almanac/properties/u/user-select/ */
  .force-select {
    -webkit-user-select: all; /* Chrome 49+ */
    -moz-user-select: all; /* Firefox 43+ */
    -ms-user-select: all; /* No support yet */
    user-select: all; /* Likely future */
  }
</style>

<style lang="scss" module="app">
</style>
