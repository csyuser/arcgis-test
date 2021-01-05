
<template>
    <div class="mapdiv">
      <div class="home" ref="home"></div>
    </div>
</template>

<script>
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
export default {
  name: 'App',
  async mounted() {
    console.log('this.$el')
    console.log(this.$el)
    const webmap = new WebMap({
      portalItem: {
        id: "aa1d3f80270146208328cf66d022e09c",
      },
    });
    const view = new MapView({
      container: this.$refs.home,
      map: webmap,
    });
    const bookmarks = new Bookmarks({
      view: view,
      // allows bookmarks to be added, edited, or deleted
      editingEnabled: true,
    });
    const bkExpand = new Expand({
      view: view,
      content: bookmarks,
      expanded: true,
    });
    // Add the widget to the top-right corner of the view
    view.ui.add(bkExpand, "top-right");
    // bonus - how many bookmarks in the webmap?
    webmap.when(function () {
      if (webmap.bookmarks && webmap.bookmarks.length) {
        console.log("Bookmarks: ", webmap.bookmarks.length);
      } else {
        console.log("No bookmarks in this webmap.");
      }
    });
  }
}
</script>

<style scoped lang="scss">
.home{
  height: 300px;
  width: 1000px;
}
</style>
