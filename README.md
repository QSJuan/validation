<p align="center">
  验证组件
</p>

https://www.npmjs.com/package/d_cascader
# d_cascader

 这里是[文档](https://github.com/dongasai/d_cascader#readme)

## Installation

```javascript
npm install q_validation --save
```
## Usage
**Register component**

Registe global component:

```javascript
import d_cascader from 'd_cascader'

Vue.component('d_cascader', d_cascader)
```

Registe component:

```javascript
import d_cascader from 'd_cascader'

export default {
  components: { d_cascader }
}
```

**How to use**

Basic:

```html
<d_cascader :cdate="citylist" > 
</d_cascader>
```
```javascript
var     citylist=[
  {
    id:"0",
    name:"名字-0"，
    unid："0"
  },{
    id:"1",
    name:"名字-1"，
    unid："0"
  },
  {
    id:"2",
    name:"名字-2"，
    unid："1"
  }
  ,
  {
    id:"3",
    name:"名字-3"，
    unid："1"
  }
];
```


Default Value:

```html
<v-distpicker :cdate="citylist" :de_value="devalue">
</v-distpicker>
```
```javascript
var     citylist=[
  {
    id:"0",
    name:"名字-0"，
    unid："0"
  },{
    id:"1",
    name:"名字-1"，
    unid："0"
  },
  {
    id:"2",
    name:"名字-2"，
    unid："1"
  }
  ,
  {
    id:"3",
    name:"名字-3"，
    unid："1"
  }
];

var de_value=[
  0,3
];
```