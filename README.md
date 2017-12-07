<h2 align="center">
  验证组件
</h2>


 这里是[文档](https://github.com/package/q_validation#readme)

## 安装

```javascript
npm install q_validation --save
```
## 使用
**注册组件**

注册全局组件:

```javascript
import q_validation from 'q_validation'

Vue.component('q_validation', q_validation)
```

注册局部组件:

```javascript
import qValidation from 'q_validation'

export default {
  components: { qValidation }
}
```

**如何使用**


```html
<qValidation v-model="img_captcha" :debug="false" :url="url" :appid="appid" :operation="operation"></qValidation>
```
双向绑定img_captcha , 验证成功后更新验证id ;<br>
url : 组件中iframe地址 , 可不传 ;<br>
appid : 应用id , 必传 ;<br>
operation : 业务id , 必传 ;<br>
debug : 测试状态 , 默认值false , 若为true , 则更改iframe地址为测试地址 ;

