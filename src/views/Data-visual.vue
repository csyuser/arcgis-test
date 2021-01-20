<template>
  <el-container class="wrapper">
    <el-header class="header" style="height: auto">
      <img src="../assets/images/top_title.png" alt="">
    </el-header>
    <el-main class="main-content">
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <Angle class="left" title="销售套数">
              <div id="main" style="height: calc(100% - 45px); width: 100%"></div>
            </Angle>
            <Angle class="left" title="缴纳税额">
              <div id="taxAmount" style="height: calc(100% - 45px); width: 100%"></div>
            </Angle>
            <Angle class="left" title="缴纳税额">
              <div id="taxAmount2" style="height: calc(100% - 45px); width: 100%"></div>
            </Angle>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content">
            <Angle class="center" title="增量房上市情况">
              <el-form ref="form" :model="formData" label-width="125px" label="right" class="demo-form-inline"
                       :inline="true" size="small">
                <el-form-item label="土地块数" class="form-item">
<!--                  <div class="data" id="odometer" ref="odometer">1000</div>-->
                  <Odometer class="data" :new-number="45123"></Odometer>
                </el-form-item>
                <el-form-item label="土地交易面积" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="土地交易金额" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="项目个数" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="房屋总套数" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="已售套数" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="待售套数" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="已销售占比" class="form-item">
                  <div class="data">80%</div>
                </el-form-item>
                <el-form-item label="申报金额" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="销售金额" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="印花税" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="城镇土地使用税" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="资源税" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="环保税" class="form-item">
                  <Odometer class="data" :new-number="45000"></Odometer>
                </el-form-item>
                <el-form-item label="xxx" class="form-item hide-item">
                  <div class="data"></div>
                </el-form-item>
              </el-form>
            </Angle>
            <Angle class="center" title="数据概览">
              <div id="lineTest" style="height: calc(100% - 45px); width: 100%"></div>
            </Angle>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <Angle class="right" title="增量房上市面积对比"></Angle>
            <Angle class="right" title="增量房住宅上市面积对比"></Angle>
            <Angle class="right" title="增量房非住宅上市面积对比"></Angle>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Angle from '@/components/Angle'
import Odometer from '@/components/Odometer'

export default {
  name: 'Data-visual',
  components: {Angle,Odometer},
  data() {
    return {
      formData: {
        name: '眉山市'
      },
    }
  },
  mounted() {
    this.drawChart()
  },
  methods:{
    drawChart() {
      let salesCountChart = this.$echarts.init(document.querySelector('#main'));
      let taxAmountChart = this.$echarts.init(document.querySelector('#taxAmount'));
      let taxAmountChart2 = this.$echarts.init(document.querySelector('#taxAmount2'));
      let lineChart = this.$echarts.init(document.querySelector('#lineTest'));
      let data = {
        legendData:['眉山市','成都市','广安市','德阳市','南充市','绵阳市','遂宁市'],
        selected: {'眉山市':true, '成都市':true, '广安市':true, '德阳市':true,'南充市':false,'绵阳市':false,'遂宁市':false},
        seriesData:[{name:'眉山市',value:2564},{name:'成都市',value:5210},{name:'广安市',value:2201},{name:'德阳市',value:4520},
          {name:'南充市',value:2032},{name:'绵阳市',value:2014},{name:'遂宁市',value:3541},],
      }
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          textStyle:{
            color:'#fff'
          },
          data: data.legendData,
          selected: data.selected
        },
        series: [
          {
            name: '省市',
            type: 'pie',
            radius: '50%',
            center: ['40%', '50%'],
            data: data.seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let lineOption = {
        // title: {
        //   text: '折线图堆叠'
        // },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问'],
          top: '5%',
          textStyle:{
            color:'#fff'
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '20px',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLabel:{
            color: '#fffff'
          }
        },
        yAxis: {
          type: 'value',
          splitArea:{
            show:true,
            areaStyle:{
              color:['rgba(255,255,255,0.1)']
            }
          },
          axisLabel:{
            color: '#7fff00'
          },
          axisTick:{show: true},
          axisLine:{show: true},
          splitLine:{
            show: false,
            // color:'#333d62'
          }
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '联盟广告',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true,
          },
          {
            name: '视频广告',
            type: 'line',
            smooth: true,
            data: [150, 232, 201, 100, 190, 330, 410],
          },
          {
            name: '直接访问',
            type: 'line',
            data: [320, 332, 301, 334, 390, 330, 320],
            smooth: true,
          },
        ]
      };
      salesCountChart.setOption(option);
      taxAmountChart.setOption(option);
      taxAmountChart2.setOption(option);
      lineChart.setOption(lineOption)
    }
    },
}
</script>

<style scoped lang='scss'>
.wrapper {
  height: 100vh;
  background: url("../assets/images/bg.png") no-repeat;
  //background: #000c3b;

  > .header {
    width: 100%;
    padding-top: 20px;

    > img {
      width: 100%;
    }
  }

  > .main-content {
    &::v-deep {
      .el-row {
        height: 100%
      }

      .el-col {
        height: 100%
      }
    }

    height: 100%;

    .grid-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > .left {
        height: 32%;

      }

      > .center {
        margin: 0 30px;
        height: 48%;

        > form {
          padding: 20px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .form-item {
            margin-right: 25px;
            &::v-deep{
              .el-form-item__content{
                display: inline-flex;
                height: 32px;
                align-items: center;
              }
            }
          }
          .hide-item::v-deep{
            label {
              font-size: 0;
            }
          }

          .data {
            color: #ffffff;
            font-size: 16px;
            width: 100px;
            text-align: left;
          }

          & ::v-deep {
            label {
              font-size: 16px;
              color: #ffffff;
            }
          }
        }
      }

      > .right {
        height: 32%;
      }
    }

  }

}
</style>