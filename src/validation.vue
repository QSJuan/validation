<template>
  <div >
        <div>
            <div class="verification-box" :value="updateCaptcha()" :class="{'fixBox':fixBox}">
                <div class="mask"></div>             
                <iframe :src="'//'+ url +'#/'+ appid +'/'+ operation +'/1'" 
                name="verification" width="100%" :height="boxHeight+'px'" frameborder="0" scrolling="no" allowtransparency="true">
                </iframe>
            </div>
        </div>
    
  </div>
</template>

<script>

export default {
  name:"q_validation",
  data() {
    return {
      fixBox: false,
      boxHeight: 56,
      img_captcha:''
    };
  },
  props: {
    url : {
        type: String,
        defalut : '//192.168.9.119:8082/index.html'
    },
    appid : Number,
    operation : Number,
    value : {}
  },
  methods: {
      updateCaptcha(){
          this.$emit('input',this.img_captcha)
      }
  },
  components: {},
  created() {

    //组件创建完成
    window.addEventListener(
      "message",
      e => {
         if (typeof e.data.event != 'undefined'){
            if(this.operation != e.data.data.operation){
                return ;
            }
         }
         
        if (e.data.event == "changeBox") {
          if (e.data.data.height > 100) {
              this.fixBox = true;
              setTimeout(() => {
                  this.boxHeight = e.data.data.height;
              }, 100);
          } else {
              this.boxHeight = e.data.data.height;
          } 
        }
        //如果验证取消
        if (e.data.event == "validationCancel") {
          this.boxHeight = 56;
          this.fixBox = false;  
        }
        //如果虚拟验证成功
        if (e.data.event == "validationSucceed") {
          this.fixBox = false;
          this.boxHeight = 56;
          this.img_captcha = e.data.data.data; 
        }
      },
      false
    );
  }
};
</script>

<style scoped>
.verification-box {
  width: 100%;
  box-sizing: border-box;
  border-radius: 28px;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  background-color: rgba(88, 79, 96, 0.498039215686275);
  
}
iframe {
  display: block;
}
.verification-box.fixBox .mask {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.verification-box.fixBox iframe {
  width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  background-color: rgba(88, 79, 96, 0.498039215686275);
}
</style>
