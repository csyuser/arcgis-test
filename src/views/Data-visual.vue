<template>
  <el-container class="wrapper">
    <el-header class="header" style="height: auto">
      <img src="../assets/images/top_title.png" alt="">
    </el-header>
    <el-main class="main-content">
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <Angle class="left" title="销售套数"></Angle>
            <Angle class="left" title="缴纳税额"></Angle>
            <Angle class="left" title="缴纳税额"></Angle>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content">
            <Angle class="center" title="增量房上市情况">
              <el-form ref="form" :model="formData" label-width="125px" label="right" class="demo-form-inline"
                       :inline="true" size="small">
                <el-form-item label="土地块数" class="form-item">
                  <div class="data" id="odometer">1000</div>
                  <!--                  <el-input class="input-wrap" v-model="formData.name"></el-input>-->
                </el-form-item>
                <el-form-item label="土地交易面积" class="form-item">
                  <div class="data">2000</div>
                </el-form-item>
                <el-form-item label="土地交易金额" class="form-item">
                  <div class="data">20000000</div>
                </el-form-item>
                <el-form-item label="项目个数" class="form-item">
                  <div class="data">1000</div>
                </el-form-item>
                <el-form-item label="房屋总套数" class="form-item">
                  <div class="data">1250</div>
                </el-form-item>
                <el-form-item label="已售套数" class="form-item">
                  <div class="data">1110</div>
                </el-form-item>
                <el-form-item label="待售套数" class="form-item">
                  <div class="data">12540</div>
                </el-form-item>
                <el-form-item label="已销售占比" class="form-item">
                  <div class="data">80%</div>
                </el-form-item>
                <el-form-item label="申报金额" class="form-item">
                  <div class="data">102848601</div>
                </el-form-item>
                <el-form-item label="销售金额" class="form-item">
                  <div class="data">12540.541</div>
                </el-form-item>
                <el-form-item label="印花税" class="form-item">
                  <div class="data">501548201</div>
                </el-form-item>
                <el-form-item label="城镇土地使用税" class="form-item">
                  <div class="data">12482015</div>
                </el-form-item>
                <el-form-item label="资源税" class="form-item">
                  <div class="data">4521025</div>
                </el-form-item>
                <el-form-item label="环保税" class="form-item">
                  <div class="data">12587135</div>
                </el-form-item>
                <el-form-item label="xxx" class="form-item hide-item">
                  <div class="data"></div>
                </el-form-item>
              </el-form>
            </Angle>
            <Angle class="center" title="数据概览"></Angle>
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
import Odometer from '@/assets/control/xxx'

export default {
  name: 'Data-visual',
  components: {Angle},
  data() {
    return {
      formData: {
        name: '眉山市'
      }
    }
  },
  mounted(){
    this.initOtometer()
  },
  methods:{
    initOtometer(){
//滚动数字
      let newNumber2 = 30000
      let el = document.querySelector('#odometer');

      let od = new Odometer({
        el: el,
        value: 0,
        format: '(,ddd).dd',
        theme: 'default'
      });
      od.update(newNumber2)
      document.querySelector('#odometerBtn').addEventListener('click',()=>{
        newNumber2 = 35012
        od.update(newNumber2)
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.wrapper {
  height: 100vh;
  //background: url("../assets/images/bg.jpg") no-repeat;
  background: #000c3b;

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
          //margin-left: -10px;
          //margin-right: -10px;
          justify-content: space-around;
          .form-item {
            margin-right: 25px;
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

          //.input-wrap ::v-deep {
          //  > input {
          //    border: none;
          //    border-radius: 0;
          //    background-color: rgba(255, 255, 255, 0);
          //    color: #ffffff;
          //    padding: 0 0 0 10px;
          //    width: 74px;
          //  }
          //}
        }
      }

      > .right {
        height: 32%;
      }
    }

  }

}
</style>