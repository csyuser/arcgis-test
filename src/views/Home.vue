<template>
  <div class="mapdiv">
    <h3>Select a basemap</h3>
    <div class="home" ref="home"></div>
  </div>
</template>

<script>
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle'
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery'

export default {
  name: 'App',
  data() {
    return{
      view:{},
      webMap:{}
    }
  },
  async mounted() {
    this.initMap()
  },
  methods: {
    initMap(){
      this.webMap = new Map({
        basemap: 'streets-navigation-vector'
      })
      this.view = new MapView({
        container: this.$refs.home,
        map: this.webMap,
        center: [-118.805, 34.027], // longitude, latitude
        zoom: 13
      })
      this.addBaseMapToggle()
      this.addBaseMapGallery()
    },
    addBaseMapToggle() {
      const basemapToggle = new BasemapToggle({
        view: this.view,
        nextBasemap: 'satellite'
      })
      this.view.ui.add(basemapToggle, "bottom-right");
    },
    addBaseMapGallery(){
      const basemapGallery = new BasemapGallery({
        view: this.view,
        source: {
          portal: {
            url: "https://www.arcgis.com",
            // useVectorBasemaps: true // Load vector tile basemaps
            useVectorBasemaps: false // Load raster tile basemaps
          }
        }
      });
      this.view.ui.add(basemapGallery, "top-right");
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  margin-left: 10px;
  height: 700px;
  width: 95%;
}
</style>
