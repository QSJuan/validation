<p align="center">
  验证组件
</p>

https://www.npmjs.com/package/q_validation
# d_cascader

 这里是[文档](https://github.com/package/q_validation#readme)

## Installation

```javascript
npm install q_validation --save
```
## Usage
**Register component**

Registe global component:

```javascript
import q_validation from 'q_validation'

Vue.component('q_validation', q_validation)
```

Registe component:

```javascript
import q_validation from 'q_validation'

export default {
  components: { q_validation }
}
```

**How to use**

Basic:

```html
<q_validation v-model="img_captcha" :url="url" :appid="appid" :operation="operation"></q_validation>
```
```javascript

```
