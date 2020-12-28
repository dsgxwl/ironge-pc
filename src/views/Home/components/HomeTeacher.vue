<!--
 * @Description: 首页-行业名师
 * @Author: xiawenlong
 * @Date: 2020-12-17 08:26:03
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-21 11:46:16
-->
<template>
  <div class="home-teacher">
    <div class="home-teacher-title">
      <span>行业名师</span>
      <router-link to="/">查看更多 <i class="el-icon-arrow-right"></i></router-link>
    </div>
    <teacher-list :teacher-list="teacherList"></teacher-list>
  </div>
</template>
<script>
import TeacherList from '@/components/TeacherList'
export default {
  name: 'HomeTeacher',
  components: {
    TeacherList,
  },
  data() {
    return {
      teacherList: [
        {
          id: 1,
          name: '张三',
          course: 21,
          people: 1221,
          content:
            '管理学博士、教授、博士生导师。2014年财政部中国会计名家培养工程的入选者、国务院特殊津贴专家...',
          pic:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
        },
        {
          id: 2,
          name: '张三',
          course: 21,
          people: 1221,
          content:
            '管理学博士、教授、博士生导师。2014年财政部中国会计名家培养工程的入选者、国务院特殊津贴专家...',
          pic:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
        },
        {
          id: 3,
          name: '张三',
          course: 21,
          people: 1221,
          content:
            '管理学博士、教授、博士生导师。2014年财政部中国会计名家培养工程的入选者、国务院特殊津贴专家...',
          pic:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
        },
        {
          id: 4,
          name: '张三',
          course: 21,
          people: 1221,
          content:
            '管理学博士、教授、博士生导师。2014年财政部中国会计名家培养工程的入选者、国务院特殊津贴专家...',
          pic:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
        },
        {
          id: 5,
          name: '张三',
          course: 21,
          people: 1221,
          content:
            '管理学博士、教授、博士生导师。2014年财政部中国会计名家培养工程的入选者、国务院特殊津贴专家...',
          pic:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.home-teacher {
  padding: 30px 0;
  &-title {
    @extend %container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e2e2;
    span {
      font-size: 18px;
      font-weight: 500;
      color: #3e3e3e;
    }
    a {
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
