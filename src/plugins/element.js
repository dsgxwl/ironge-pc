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
Message.install = () => {
  Vue.prototype.$message = Message
}
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
Object.values(components).forEach(component => {
  Vue.use(component)
})
