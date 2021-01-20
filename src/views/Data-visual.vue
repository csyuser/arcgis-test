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
import Odometer from '@/components/Odometer'

export default {
  name: 'Data-visual',
  components: {Angle,Odometer},
  data() {
    return {
      formData: {
        name: '眉山市'
      },
      xxx:45000
    }
  },
  methods:{
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