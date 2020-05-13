<template>
  <div class="Form">
    <table cellspacing="0" align="center" border="0">

      <tr>
        <th colspan="8">{{ applyFormTitle }}</th>
      </tr>

      <tr>
        <td>姓名</td>
        <td>
          <el-input v-model="applyFormData.name" />
        </td>
        <td>性别</td>
        <td>
          <el-select v-model="applyFormData.sex" placeholder="请选择">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </td>
        <td rowspan="3" class="avatar-content">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="applyFormData.avatar" :src="applyFormData.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </td>
      </tr>

      <tr>
        <td>出生年月</td>
        <td>
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="applyFormData.birth" />
        </td>
        <td>政治面貌</td>
        <td>
          <el-select v-model="applyFormData.politication" placeholder="请选择">
            <el-option v-for="identy in politication" :key="identy" :label="identy" :value="identy"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td>民族</td>
        <td>
          <el-select v-model="applyFormData.people" placeholder="请选择">
            <el-option v-for="people in peoples" :key="people" :label="people" :value="people"></el-option>
          </el-select>
        </td>
        <td>技术职称</td>
        <td>
          <el-select v-model="applyFormData.technicalTitle" placeholder="请选择">
            <el-option v-for="tec in technical" :key="tec" :label="tec" :value="tec"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td>身份证号</td>
        <td>
          <el-input v-model="applyFormData.identifyCode" />
        </td>
        <td>毕业院校</td>
        <td colspan="2">
          <el-input v-model="applyFormData.graduateUni" />
        </td>
      </tr>

      <tr>
        <td>专业</td>
        <td>
          <el-input v-model="applyFormData.major" />
        </td>
        <td>毕业时间</td>
        <td colspan="2">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="applyFormData.graduateTime" />
        </td>
      </tr>

      <tr>
        <td>资格证培训机构</td>
        <td>
          <el-input v-model="applyFormData.qualificationOrg" />
        </td>
        <td>培训时间</td>
        <td colspan="2">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-model="applyFormData.traningTime" />
        </td>
      </tr>

      <tr>
        <td>工作单位</td>
        <td>
          <el-input v-model="applyFormData.workplace" />
        </td>
        <td>单位职务</td>
        <td colspan="2">
          <el-input v-model="applyFormData.career" />
        </td>
      </tr>

      <tr>
        <td>通讯地址</td>
        <td>
          <el-input v-model="applyFormData.postalAddr" />
        </td>
        <td>邮政编码</td>
        <td colspan="2">
          <el-input v-model="applyFormData.postCode" />
        </td>
      </tr>

      <tr>
        <td>Email</td>
        <td>
          <el-input v-model="applyFormData.email" style="max-width:75%;margin-right:3%" />
          <el-button type="primary" style="max-width:20%">修改</el-button>
        </td>
        <td>手机</td>
        <td colspan="2">
          <el-input v-model="applyFormData.phoneNum" style="max-width:75%;margin-right:3%" />
          <el-button type="primary" style="max-width:20%">修改</el-button>
        </td>
      </tr>

      <tr>
        <td>心理咨询师级别</td>
        <td>
          <el-select v-model="applyFormData.counselorLevel" placeholder="请选择">
            <el-option v-for="level in psyLevel" :key="level" :label="level" :value="level"></el-option>
          </el-select>
        </td>
        <td>获证年份</td>
        <td colspan="2">
          <el-date-picker
            type="year"
            placeholder="选择年份"
            v-model="applyFormData.awardYear" />
        </td>
      </tr>

      <tr>
        <td>证书编号</td>
        <td colspan="4">
          <el-input v-model="applyFormData.certificateCode" />
        </td>
      </tr>
    </table>
    <div class="work-btn">
      <el-button type="success">保存</el-button>
      <el-button type="primary" @click="submitApplyForm">提交</el-button>
    </div>
  </div>
</template>

<script>
import { Input, Select, Option, DatePicker, Upload, Button } from 'element-ui'
export default {
  props: {
    applyFormTitle: String,
  },
  components: {
    "el-input": Input,
    "el-select": Select,
    "el-option": Option,
    "el-date-picker": DatePicker,
    "el-upload": Upload,
    "el-button": Button,
  },
  data(){
    return {
      psyLevel: ['一级', '二级', '三级'],
      technical: ["正高级", "副高级", "中级", "初级", '无'],
      peoples: [
              "汉族", "满族", "蒙古族", "回族", "藏族", "维吾尔族",
              "苗族", "彝族", "壮族", "布依族", "侗族", "瑶族", "白族",
              "土家族", "哈尼族", "哈萨克族", "傣族", "黎族", "傈僳族",
              "佤族", "畲族", "高山族", "拉祜族", "水族", "东乡族", "纳西族",
              "景颇族", "柯尔克孜族", "土族", "达斡尔族", "仫佬族", "羌族",
              "布朗族", "撒拉族", "毛南族", "仡佬族", "锡伯族", "阿昌族", "普米族",
              "朝鲜族", "塔吉克族", "怒族", "乌孜别克族", "俄罗斯族", "鄂温克族",
              "德昂族", "保安族", "裕固族", "京族", "塔塔尔族", "独龙族", "鄂伦春族",
              "赫哲族", "门巴族", "珞巴族", "基诺族"
      ],
      politication: [
                      '中共党员', '中共预备党员', '共青团员',
                     '民革党员', '民盟盟员', '民建会员', '民进会员',
                     '农工党党员', '致公党党员', '九三学社社员', '台盟盟员', '无党派人士', '群众'
      ],
      applyFormData: {
        name: '',
        sex: '',
        birth: '',
        avatar: '',
        politication: '',
        people: '',
        technicalTitle: '',
        identifyCode: '',
        graduateUni: '',
        major: '',
        graduateTime: '',
        qualificationOrg: '',
        traningTime: '',
        workplace: '',
        career: '',
        postalAddr: '',
        postCode: '',
        email: '',
        phoneNum: '',
        counselorLevel: '',
        awardYear: '',
        certificateCode: '',
        scientificResearchProject: [],
        academicPapers: [],
        approve: '',
        vipCode: '',
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.applyFormData.avatar = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitApplyForm(){
      this.$emit("submitApplyForm", this.applyFormData)
    }
  }
}
</script>

<style>
.Form {
  background: #f7f7f8;
  padding: 20px 10px;
}
.Form .el-input {
  min-width: 200px;
  max-width: 90%;
}
.Form table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  margin-bottom: 20px;
}
.Form table tr > td:nth-of-type(odd) {
  font-size: 14px;
  font-weight: bold;
  color: #34495e;
}
.Form table tr th {
  font-size: 1.4em;
  line-height: 3;
}
.Form table tr th,
.Form table tr td {
  border: 1px solid #cfd3d5;
  padding: 8px 10px 8px 15px !important;
}

.work-btn {
  display: flex;
  justify-content: center;
}
.work-btn > * {
  margin-right: 20px;
  width: 100px;
}

.avatar-content {
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
