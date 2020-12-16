import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
  Form,
  FormItem,
  Carousel,
  CarouselItem,
  Loading,
  Message,
} from 'element-ui'
const components = {
  Pagination,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
  Form,
  FormItem,
  Carousel,
  CarouselItem,
  Loading,
  Message,
}
Message.install = () => {
  Vue.prototype.$message = Message
}
Object.values(components).forEach(component => {
  Vue.use(component)
})
