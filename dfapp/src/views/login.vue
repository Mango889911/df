<template>
    <div class="wrap" id="wrap">
        <div class="logGet">
            <!-- 头部提示信息 -->
            <div class="logD logDtip">
                <p class="p1">登录</p>
            </div>
            <!-- 输入框 -->
            <div class="lgD">
                <!-- <img src="assets/logo.png" width="20" height="20" alt="" /> -->
                <input type="text" placeholder="请输入电话号码"  v-model="telNum" @blur="val"/>
            </div>
            <div class="lgD">
                <!-- <img src="img/logPwd.png" width="20" height="20" alt="" /> -->
                <input type="password" placeholder="输入用户密码" v-model="pwd" @blur="val"/>
            </div>
            <div class="logC">
                <button @click="login">登 录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                telNum:'',
                pwd:''
            }
        },
        methods: {
            val(e){
                var regTel=/^\d{11}$/;
                var regPsw=/^[\w\.-]{6,}$/;  
                    if(regTel.test(this.telNum)&&regPsw.test(this.pwd)){
                        return true
                    }else{
                        return false
                    }
            },
            login() {
                var isLogin=this.val();
                if(isLogin){
                    this.axios.get("/user/login",{params:{
                        tel:this.telNum,
                        upwd:this.pwd
                    }}).then(res=>{
                        if(res.data=="0"){
                            alert("用户或密码错误")
                        }else{
                            // console.log(this.canLogin)
                            // sessionStorage.setItem("uname",this.telNum)
                            this.bus.$emit("saveuname",this.telNum)
                            this.$router.push("/home")
               
                        }
                    }).catch(err=>{
                        console.log(err)
                    })
                }
            }
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    #wrap {
        height: 600px;
        width: 100%;
        background-position: center center;
        position: relative;
        background-image: url(../../public/img/bgLogin.jpg)
    }
    #head {
        height: 120px;
        width: 100;
        background-color: #66CCCC;
        text-align: center;
        position: relative;
    }
    #wrap .logGet {
        height: 408px;
        width: 368px;
        position: absolute;
        background-color: #FFFFFF;
        top: 100px;
        right: 15%;
    }

    .logC a button {
        width: 100%;
        height: 45px;
        background-color: #ee7700;
        border: none;
        color: white;
        font-size: 18px;
    }

    .logGet .logD.logDtip .p1 {
        display: inline-block;
        font-size: 28px;
        margin-top: 30px;
        width: 86%;
    }

    #wrap .logGet .logD.logDtip {
        width: 86%;
        border-bottom: 1px solid #ee7700;
        margin-bottom: 60px;
        margin-top: 0px;
        margin-right: auto;
        margin-left: auto;
    }

    .logGet .lgD img {
        position: absolute;
        top: 12px;
        left: 8px;
    }

    .logGet .lgD input {
        width: 100%;
        height: 42px;
        text-indent: 2.5rem;
    }

    #wrap .logGet .lgD {
        width: 86%;
        position: relative;
        margin-bottom: 30px;
        margin-top: 30px;
        margin-right: auto;
        margin-left: auto;
    }

    #wrap .logGet .logC {
        width: 86%;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
    }


    .title {
        font-family: "宋体";
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* 使用css3的transform来实现 */
        font-size: 36px;
        height: 40px;
        width: 30%;
    }

    .copyright {
        font-family: "宋体";
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* 使用css3的transform来实现 */
        height: 60px;
        width: 40%;
        text-align: center;
    }
</style>
