<template>
  <div class="mapdiv">
    <h3>Add layers to a map</h3>
    <div class="home" ref="home"></div>
  </div>
</template>

<script>
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"

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
      this.createMap()
      this.addTrailLayer()
      this.addTrailsAndParks()
    },
    createMap(){
      this.webMap = new Map({
        basemap: 'streets-navigation-vector'
      })
      this.view = new MapView({
        container: this.$refs.home,
        map: this.webMap,
        center: [-118.805, 34.027], // longitude, latitude
        zoom: 12
      })
    },
    addTrailLayer(){
      const trailheadsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
      });
      this.webMap.add(trailheadsLayer);
    },
    addTrailsAndParks(){
      const trailsLayer = new FeatureLayer({
        url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
      })
      const parkLayers = new FeatureLayer({
        url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
      })
      this.webMap.add(trailsLayer,0)
      this.webMap.add(parkLayers,0)
    },
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
