<!--
 * @Description: 首页-推荐课程
 * @Author: xiawenlong
 * @Date: 2020-12-16 22:57:12
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-21 11:46:06
-->
<template>
  <div class="home-course">
    <div class="title">推荐课程</div>
    <div v-for="item in courseData" :key="item.id" class="home-course-class">
      <div class="class-title">
        <div class="title">一级分类A</div>
        <router-link to="/">查看更多 <i class="el-icon-arrow-right"></i></router-link>
      </div>
      <course-list :course-list="item.content"></course-list>
    </div>
  </div>
</template>
<script>
import CourseList from '@/components/CourseList'
export default {
  name: 'HomeCourse',
  components: {
    CourseList,
  },
  data() {
    return {
      courseData: [
        {
          oneName: '一级分类A',
          id: 1,
          content: [
            {
              sid: 1,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
          ],
        },
        {
          oneName: '一级分类B',
          id: 2,
          content: [
            {
              sid: 1,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
          ],
        },
        {
          oneName: '一级分类C',
          id: 3,
          content: [
            {
              sid: 1,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
            {
              sid: 2,
              name: '财务报表完整版',
              video: 135,
              time: 453,
              go: '融E学',
              pic:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605260573574&di=b4cc8d15135ebd02683dc14189992be3&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg',
              money: 199,
              people: 1535,
            },
          ],
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.home-course {
  padding-top: 20px;
  > .title {
    @extend %container;
    line-height: 38px;
    font-size: 18px;
    font-weight: 500;
    color: #3e3e3e;
    border-bottom: 1px solid #e2e2e2;
  }
  &-class {
    &:nth-of-type(2n-1) {
      background-color: #f2f2f2;
    }
    .class-title {
      @extend %container;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      .title {
        font-size: 24px;
        font-weight: 500;
        color: #3e3e3e;
        line-height: 64px;
      }
      a {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
