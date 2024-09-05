<template>
    <div class="login">
        <div class="login-wrap">
            <div class="mini-close-icon" @click="toggleLogView"></div>
        <div class="login-wrap-left">
            <div class="login-wrap-left-scan-title">
                扫码下载APP
            </div>
            <div class="login-wrap-left-scan-box">
                    <img alt="Scan me!"
                        src="data:image/png;base64,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">
                    <div class="login-icon"></div>
            </div>
            <div class="login-wrap-left-scan-desc">
                    <p> 请使用 <a  target="_blank" style="color: #00aeec;">哔哩哔哩客户端</a></p>
                    <p>或扫描上方二维码下载APP</p>
                </div>
        </div>
        <div class="login-line"></div>
        <div class="login-wrap-right">
        <div class="login-title">
            <div ref="logRef" @click="changeLog" class="login-title-btn" :style="{color:'#5AAFF2'}">登录</div>
            <div class="login-title-line"></div>
            <div ref="resRef" @click="changeRes" class="login-title-btn">注册</div>
        </div>
        <div class="login-form-wrap" v-if="data.log">
            <div :class="data.log ? 'login-form' : '' "> 
            <div class="login-form-item">
            <span >账号</span>
            <input
                autocomplete="off"
                maxlength="20"
                oninput="value=value.replace(/\s+/g, '')"
                v-model="data.userInfo.username"
                @blur="handleBlur('username')"

                :class="{ 'is-invalid': usernameError }"
                placeholder="请输入账号"
                type="text"
            />
           
            </div>
            
            <div class="login-form-line"></div>
            <div class="login-form-item">
                <span>密码</span>
                <input 
                autocomplete="off"
                maxlength="40" 
                 @change="valPsdAgain"
                oninput="value=value.replace(/\s+/g, '')"
                @blur="handleBlur('password')"
                :class="{ 'is-invalid': passwordError }"
                v-model="data.userInfo.password" 
                placeholder="请输入密码" 
                type="password">
            </div>
            <div v-if="data.showMessage" class="message">{{ data.message }}</div>
        </div>
        <btnCo class="login-form-btn" :size="20" content="登录" @click="login"></btnCo>
            <div class="login-form-sns-wp">
                <span>其他方式登录</span>
                <div class="login-form-sns-content">
                    <div class="login-form-sns-item"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAgVBMVEUAAABXu0BYt0BQt0BXu0BWu0BXu0BXu0BXu0BWukBWukBXvEBXu0BXvEBXvEBYukBVukBXu0BWt0BXukBXuEBXu0D////1+/Pq9+fV7s/A5rer3aBsw1jg89uBzHBiwEy14auL0Xug2ZOW1YeBzG93yGSW1YjL6sO14azL6cN2yGP3XpzOAAAAFXRSTlMA3yAQ78+/r5+AUI9w74BgYEBAkHDBb56KAAACF0lEQVRIx52W6XKDIBRGwT3GZmsRUXFP0vb9H7AKGS8aiCXnR0TCmU/gOoh0uJck8jEZwUGYXND/cOPggyz4CE//0HZgKeDIsdSA3Qs1Bk2XejLF7ckGe1fnOT7ZBDsaDxNiZ4Jna4Jnb7rgbeKrK7QnFuzBOxIrYrsJAth9iIdl/9CwLE0pv/elqfoegWpfXdAUYINW9GRkRIBWakBemiOVGRbpE1lpijwaPDANCxvCc8qBbcVF47vq5EQ1YjCK3nyXiXE3QqrpSseeu+jptc96XgWmHSGDEGtCmDHygpK5nUuRdr2MvvfNdMvzXCN+KVNk6RO0qOpr37fXJzFCwdzmT9532THZovmqFHxlF3/WcdWQGUsBI2g3K/G3WG3o4oEVsVqOK4RHaTpfaKkXCVsWzPTL65pPN7X4kxnEX6qIXS4mJqfOH5tVKSJWzJsiXqlcklxe5AI0yuL4RDUpiKkGphRrRFRK+lLk88AQSg4KXVC9TvwSRQ4MU5m1xZ2xlmnEm1LkrqeKTVbU5rcaNtJDCAWqCOutq90CpjiKMTFQZuuah/9Oo+h6ZtPkYTSxI0YKReWLtxFBpJ5bzjOasWYsoBp6HQSRW5R5tz4C4HS0PltjO/H05sH6iQDXtz0d3/94ANPes/9Asjd9572PwE8X6Tm+DPViZMQ5mLUDxGnVCFtqwDH0VlYQS22bcxIGIhn7UXLWWn+10s6FZo+4YQAAAABJRU5ErkJggg=="
                            class="login-form-sns-item-icon"><span class="login-sns-name">微信登录</span></div>
                    <div class="login-form-sns-item"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAh1BMVEUAAADXQDjTQDzaQzfcRTfbRDfcRDbcQzbbRDbbRDfcQzbaQzbbRDbbRDbaRDfcQzbbRDfaQjjaQjXcQzfYRDfbRDTbRDf////gW1D99PPtoZvyubT76Ob20M3pioLdT0Tvrajkc2n20c3rlo7mfnb0xcD43NrrlY7kcmniZ1343driZ1z0xMEgvW1iAAAAFnRSTlMAIBDf34Dv78+/n1BAj7CvcGBgkHBwDUc+aAAAAmpJREFUSMeVlueCqjAQRgOI0qy7m0YVsN297/98OwEdCUQ05w8WDt/MkIjEhJv8RIFHAS/c/CTkM9w4XFKN5ebwgeaDNWURObYa4s+oMWrG1MOruDV9w9o1eU5A37JwDN6CUksTPWsTPXvTRe89wXBCa2rB+ukd6By3K6ca8WcNVoyxLB26i0ex/mxgzRTiMlx990A6C09PZ6XKwXbpIyP6Fn4C8zKONHVYFrJ4tJWfoUMJ5k2PPBi0igHZrX8j4HVLITPXB7udeK1gHem9ziJjouTwQYmnhCCuxh5UhSJO9qKmWwxrTcZeyh5UpcyFyOH0Bi5SaYNNyG7qYeK95CttWUWlJn6PW5RsSgVtlyqxoEhEQs1rNEPrldf5cI8Qb+hxYRKlaVsSY4NZKqU81aynpQY0kTNF3pS4fsDFvTESx4Gi0b4vMqWKdl4UcHWukmSeZXnRV9Gb5VgcDucIJ3B11JbckSmKyXAC7V7I52hxI2WmyYYk0m7+Dbd8JR7boTYlbshOE9WBsYb+MglBZ6r4p8TxXL+Hi7zov2dCnY1N8v7ViIS4z21V9q3U7Ap9YkzOulnrLAkZLtYTA4f+CpYLHEjFgCMdtwhiTBGedT+D/NwtIHU2V3li4tE9iO5qaILQwvF4LNUtTLsr8InnTX6Pebfq8qopmup/V29W0CkRIaNISDmxJwLqNeEYHwG8repzltVpA/Ua8UmP61ErPHy2xnbiniBflg9WxA0sCnXJAMezadDSRM/aRM/eDMCb4n7Z/glE9rOhq5i8xPFfaz7GmdXIs9aw4O1qZIUxam9IdtuwS/aCaJcYrT+uh9kYccQkXQAAAABJRU5ErkJggg=="
                            class="login-form-sns-item-icon"><span class="login-sns-name">微博登录</span></div>
                    <div class="login-form-sns-item"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAb1BMVEUAAABMouVIn+NEn99MouVMouVMo+ZMouVKouRKouJMn+NMouZLouRLo+VMoeNMouZLoeVLoeVNn+RMouX///+83Pal0PL0+v6x1vRireiay/FXqOfS6Pl5uevH4vePxe+Ev+1utOrp9Pzp8/yEv+7XzqLPAAAAE3RSTlMA3yAQ74C/n2BQQK9wz5CPz7BwJ8NfpgAAAbNJREFUSMe1lutygjAQhTeEOyi2AQIC3t//GcvYqk3OYsh0+v1yMN+czc4mQBwyL5ONUDMiLsqc1iGzOFQGYZGu0KLZQkQSrNSQ6I2aGRqkpktxlXJQSc4LNsqJCBhPOCQwwXOa6PmbErxlNpJeVMqD6uWliqOfprPiyN5tcOp0PaObntnmo9hIAV39pFNA9BOogKb+RQN/h9+RCfzR1gbtQqSArtQmemAjUy4QI7GxBTy92qKGJfEshlgp0DO15srmhuIRFuX0Cc/2KO5hUUkF1xt3dxKKuUS3uCPBjA0w4rySwqYyDLCM+EqxVrd45UTtFm81ywlEuzkHXhyhOfY1DArfntg+jRMY/PB80CeODaLhHigpt7fYNSgeuvpgD7k0j9V4Gfbc6RjN7oRE1rCeejVo27vMD4/WFokynB33qUpnUYb+t5zg7+OhNYrVxx5PIzGRJ9ijniwxIC7y3DV3urZ9/DrDfQxvR793a+YnpvRk6+Nt6YXceRQq//rxgKb/h87/fVrtAmKQW2c/JfGkb0PDjBYJomUtMuJQTcRKDUmL0LLiDDWevCzie7LYJGXOWl/BnLhvbq/sWgAAAABJRU5ErkJggg=="
                            class="login-form-sns-item-icon"><span class="login-sns-name">QQ登录</span></div>
                </div>
            </div>
        </div>
        
        <div class="login-form-wrap"  v-else>
            <div :class="data.res ? 'login-form' : ' '" >
                <div class="login-form-item">
            <span >昵称</span>
            <input
                autocomplete="off"
                maxlength="20"
                oninput="value=value.replace(/\s+/g, '')"
                v-model="data.userInfo.nickname"
                placeholder="请输入昵称"
                type="text"
            />
            </div>
            <div class="login-form-line"></div>
            <div class="login-form-item">
            <span >账号</span>
            <input
                autocomplete="off"
                maxlength="20"
                oninput="value=value.replace(/\s+/g, '')"
                v-model="data.userInfo.username"
                @blur="handleBlur('username')"
                :class="{ 'is-invalid': usernameError }"
                placeholder="请输入账号"
                type="text"
            />
            </div>
            <div class="login-form-line"></div>
            <div class="login-form-item">
                <span>密码</span>
                <input 
                autocomplete="off"
                maxlength="40" 
                oninput="value=value.replace(/\s+/g, '')"
                @blur="handleBlur('password')"
                :class="{ 'is-invalid': passwordError }"
                v-model="data.userInfo.password" 
                placeholder="请输入密码" 
                type="password">
            </div>
            <div class="login-form-line"></div>
                <div class="login-form-item">
                <span>确认</span>
                <input autocomplete="off"
                 maxlength="40"
                  oninput="value=value.replace(/\s+/g, '')" 
                  @blur="handleBlur('passwordAgain')"
                :class="{ 'is-invalid': passwordAgainError }"
                v-model="data.userInfo.passwordAgain" 
                  type="password" 
                  placeholder="请再次输入密码" >
            </div>
            <div class="login-form-line"></div>
            <!-- <div class="login-form-item">
                <span>验证</span>
                <input v-model="data.userInfo.captcha" 
                @change="valCaptcha"
                placeholder="请输入验证码"
                 type="text">
            </div> -->
            <div v-if="data.showMessage" class="message">{{ data.message }}</div>
        </div>
            <btnCo class="login-form-btn" :size="20" content="注册" @click="register"></btnCo>
                
        </div>
        <div class="login-form-wp">
                    <p> 首次使用请先注册</p>
                    <p> 登录或完成注册即代表你同意 <span class="link-word">用户协议</span> 和 <span class="link-word">隐私政策</span></p>
            </div>
    </div>
    </div>
    </div>
</template>
<script>
import { defineComponent, reactive, ref ,getCurrentInstance  } from 'vue'
import { useStore } from 'vuex';
import btnCo from '../btn/btn.vue'
export default defineComponent({
    name: 'loginCo',
    components: {
        btnCo    
    },
    setup(props) {
        const store = useStore();
        // const changeBig = computed(() => store.state.changeBig);
        const toggleLogView = () => {
        store.commit('changeLogView');
        };
        const data = reactive({
            log: true,
            res: false,
            userInfo: {
                nickname:'',
                username: '',
                password: '',
                passwordAgain: '',
                captcha: ''
            },
            message: '',
            showMessage : false
        })
        const logRef = ref(null);
        const resRef = ref(null);
        const usernameError = ref(null);
        const passwordError = ref(null);
        const passwordAgainError = ref(null);
        const globalProperties = getCurrentInstance().appContext.config.globalProperties; // 获取全局挂载
        const loginSuccess = function(res) {
            console.log('loginSuccess');
            // 写入用户信息
            store.commit('setUser', res.data)
            // 存储用户信息
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            // 关闭窗口
            store.commit('changeLogView')
        };
        const login = async () => {
            if (usernameError.value) {
                // 如果用户名验证失败，不执行登录操作
                return;
            }
            // data.message = ''; // 清除之前的错误信息
            // loading.value = true; // 显示加载状态

            try {
                const res = await globalProperties.$utils.post('users/login', {
                "username": data.userInfo.username,
                "password":  data.userInfo.password
                });
                console.log('post')
                if (res.code === 10000) {
                // 登录成功
                loginSuccess(res);
                } else {
                    // 登录失败
                    data.message = '用户名或密码错误';
                    handleBlur('fail');
                //showErrorMsg('用户名或密码错误');
                }
            } catch (error) {
                data.message = '网络错误，请稍后再试';
                    handleBlur('fail');
                // 网络错误或其他异常
                // showErrorMsg('网络错误，请稍后再试');
                console.error('Login error:', error);
            } finally {
                // loading.value = false; // 隐藏加载状态
            }
            };
            
        const register = async () => {
            try {
                // 验证输入数据
                if (!data.userInfo.username || !data.userInfo.password ) {//|| !data.userInfoe.captcha
                data.message = '所有字段都是必填的';
                return;
                }
                // 发送 POST 请求
                const res = await globalProperties.$utils.post('users/register', {
                    nickname:data.userInfo.nickname,
                    username: data.userInfo.username,
                    password: data.userInfo.password,
                    id:Math.floor(10000000 + Math.random() * 90000000),
                });
                console.log('API request result:', res);
                // 根据响应代码处理不同情况
                switch (res.code) {
                case 10000:
                    // 注册成功
                    data.message = '注册成功';
                    setTimeout(() => {
                    // 在注册成功后，进行一些状态更新
                        // 这里可以替换为适当的状态更新逻辑
                        changeRes();
                    }, 2000);
                    break;

                case 102:
                    // 用户名已被注册
                    data.message = '该用户名已被注册';
                    break;
                case 104:
                    // 验证码错误
                    data.message = '验证码输入错误';
                    break;
                default:
                    // 其他错误
                    data.message = '用户名只能包含字母或数字';
                    break;
                }
            } catch (error) {
                // 捕获并处理请求失败的异常
                console.error('注册请求失败:', error);
                data.message = '注册请求失败，请稍后再试';
            }
            };
        const changeLog = function () {
            if (data.log != true)
            {
                data.log = !data.log;
                data.res = !data.res;
                logRef.value.style.color = '#5AAFF2'
                resRef.value.style.color = '#6A6C70';
            }
        }
        const changeRes = function () {
            if(data.res != true)
            {
                // data.userInfo.nickname = '';
                // data.userInfo.username = '';
                // data.userInfo.password = '';
                // data.userInfo.passwordAgain = '';
                data.log = !data.log;
                data.res = !data.res;
                resRef.value.style.color = '#5AAFF2'
                logRef.value.style.color = '#6A6C70';
            }
        }

        // Validation methods
        const validateUsername = () => {
        const username = data.userInfo.username;
        if (username.length < 6 || username.length > 20) {
            usernameError.value = '用户名长度应位于6-20位之间';
        } else {
            usernameError.value = '';
        }
        };

        const validatePassword= () => {
        const password = data.userInfo.password;
        if (password.length < 6 || password.length > 20) {
            passwordError.value = '密码长度应位于6-20位之间';
        } else {
            passwordError.value = '';
        }
        };
        const validatePasswordAgain= () => {
            const password = data.userInfo.password;
            const passwordAgain = data.userInfo.passwordAgain;
            if (password != passwordAgain) {
                passwordAgainError.value = '两次密码输入不相同';
            } else {
                passwordAgainError.value = '';
            }
        };
        const handleBlur = (field) => {
        if (field === 'username') {
            validateUsername();
            data.message = usernameError.value;
        }
        else if (field === 'password') {
            validatePassword();
            data.message = passwordError.value;
            }
        else if (field === 'passwordAgain') {
            validatePasswordAgain();
            data.message = passwordAgainError.value;

        }
        if ( data.message) {
            data.showMessage = true;
            setTimeout(() => {
            data.showMessage = false;
            }, 2000);
        }
        };
        return {
            props, data, changeLog, changeRes, logRef, resRef, toggleLogView, usernameError
            , handleBlur, passwordError,login,register,passwordAgainError
        }
    }
  })
</script>
  
<style lang="scss" scoped>
.login{
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 10010;
    align-items: center;
    justify-content: center;
    &-wrap{
        //display: inline-block;
        position: relative;
        border-radius: 8px;
        width: 800px;
        height: 40%;
        box-shadow: 0 6px 10px 0 rgba(220, 226, 230, 0.15);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
        &-left{
            margin: 0 5%;
            &-scan-title{
                font-weight: 500;
                font-size: 18px;
                line-height: 16px;
                color: #505050;
                margin-bottom: 26px;
            }
            &-scan-desc{
                margin-top: 18px;
                font-size: 13px;
                // line-height: 19px;
                text-align: center;
                color: #505050;
            }
        }
        &-right{
            margin: 0 5%;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
   
    &-line{
        width: 1px;
        height: 60%;
        background-color: #e3e5e7;
        border-radius: 8px;
    }
    &-title{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 50%;
        &-line{
            width: 1px;
            height: 20px;
            background-color: black;
        }
        &-btn{
            margin: 5%;
            color: #6A6C70;
            cursor: pointer;
        }
    }
    &-form-wrap{
        width: 100%;
    }
    &-form{
        // border: 1px solid #6A6C70;
        display: inline-block;
        border-radius: 8px;
        width: 90%;
        text-align: center;
        border: 1px solid #e3e5e7;
        &-item{
            width: 100%;
            display: flex;
            flex-direction: row;
            //position: relative;
            //height: 44px;
            
            // padding: 12px 20px;
        }
        &-line{
            width: 100%;
            height: 0;
            border-bottom: 1px solid #e3e5e7;
        }
        &-btn{
            margin: 5% auto;
        }
        &-sns-wp{
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #9499a0;
            font-size: 13px;
        }
        &-sns-content{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 12px;
        }
        &-sns-item {
            margin-right: 30px;
            cursor: pointer;
            &-icon{
            
                width: 28px;
                height: 28px;
                margin-right: 8px;
            
            }
        }
       
        &-wp{
            width: 100%;
            color: #999;
            font-size: 13px;
            text-align: center;
        }
        span{
            padding: 3%;
        }
        input{
        width: 100%;
            margin-left: 5%;
            padding: 3% 0;
        }
    }
}
.mini-close-icon{
    width: 32px;
    height: 32px;
    position: absolute;
    top: 20px;
    right: 20px;
    background: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/close.a35a1809.svg) no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    z-index: 2;
}
.link-word {
    color: #00a1d6;
    cursor: pointer;
}
.error {
    color: red;
    font-size: 0.75rem;
  }

  
  .message {
    color: #333;
    background-color: #f0f0f0;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.875rem;
    position: absolute;
    transition: all 0.2s ease;
  }
</style>
  
  