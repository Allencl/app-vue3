<template>
    <div>
      <v-card
        class="mx-auto pa-4 pb-4"
        elevation="0"
        max-width="448"
        rounded="lg"
      >
        <v-img
            class="mx-auto mb-10"
            max-width="218"
            :src="logoImage"
        ></v-img>

        <v-form ref="form">
  
        <div class="text-subtitle-1 text-medium-emphasis">用户名</div>
  
        <v-text-field
            v-model="formValue.name"
          placeholder="请输入用户名"
          prepend-inner-icon="mdi-account"
          variant="solo"
          density="compact"
          :rules="[
                v => !!v || '用户名必填！',
            ]"
            required
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          密码
  
          <!-- <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            忘记密码?</a> -->
        </div>
  
        <v-text-field
            v-model="formValue.password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          placeholder="请输入密码"
          prepend-inner-icon="mdi-lock-outline"
          variant="solo"
          density="compact"
          :rules="[
                v => !!v || '密码必填！',
            ]"
            required
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <!-- <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text>
        </v-card> -->

        <v-row no-gutters>
          <v-col cols="5">
            <v-text-field
              v-model="formValue.code"
              placeholder="验证码"
              prepend-inner-icon="mdi-xml"
              variant="solo"
              density="compact"
              :rules="[
                    v => !!v || '验证码必填！',
                ]"
                required
              ></v-text-field>
          </v-col>
          <v-col cols="7" class="pl-3">
            <v-img
              style="display: inline-block;position:relative;top:3px;"
              height="35"
              width="82"
              :src="data64Image"
              @click="getCode"
            ></v-img>
            <v-btn 
              color="primary"
              density="compact"
              variant="plain"
              style="padding:0px;position:relative;top:-8px;left:6px;"
              @click="getCode"
            >
              获取验证码
            </v-btn>
          </v-col>

        </v-row>

        </v-form>



  
        <v-btn
          block
          class="mb-8"
          color="primary"
          size="large"
          variant="tonal"
          @click="loginHandle"
        >
          登 录
        </v-btn>
  
        <!-- <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text> -->
      </v-card>
    </div>
</template>
  
<script>
  import {JSEncrypt} from 'jsencrypt'
  import {loginHTTP,codeHTTP} from '@/http/login'   // api
  import { showSuccessToast,showFailToast } from 'vant'


  
// 密钥
const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDUWQteEr5ZCpOgO0NJ7SM706M\n' +
  'fUleLNxE/8tYhiEkViZ1TISv1oycR8oxO2PCQEAp8ek+RxpJVxGmhl6PWUIVCvr4\n' +
  'ZhBBv3B1aRhq1o5ZIvBkosDnFm+jWfX/LJ4R4uXMHXS7/xxPSz8OKOMs2IG9KdOq\n' +
  '+TLKFsTgqjKDWuOL9QIDAQAB'
const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMNRZC14SvlkKk6A\n' +
  '7Q0ntIzvTox9SV4s3ET/y1iGISRWJnVMhK/WjJxHyjE7Y8JAQCnx6T5HGklXEaaG\n' +
  'Xo9ZQhUK+vhmEEG/cHVpGGrWjlki8GSiwOcWb6NZ9f8snhHi5cwddLv/HE9LPw4o\n' +
  '4yzYgb0p06r5MsoWxOCqMoNa44v1AgMBAAECgYEAsE9NZbo7u4oOopTA52obEkmH\n' +
  'F0yVKPzHzUU2Mu/JBPr7dlEfSXcbsIshWnWo5JWJFhP4Hy6h7Og6155dx3qkKbOL\n' +
  'FQ9Shwr6ffJ8obLhmdQHIBCt5j58bth7oBGO/kCRGKAtCCnzfwJn/OuwSLQDgUkd\n' +
  '/ED9euQt7wXGj4zsGBUCQQDy8qvkGm2WeGTDCw/3DBswGK3yY591E45Gpn8bdddI\n' +
  'ByTWQpCsW6PlVQhYPe8ugUn1DWU7p9qo5Nbl7HXO2D6TAkEAzc+m0BH42WVaEyDi\n' +
  'JJa8yLQQk67b2jWIeg+NlJhNk+1dkLowPlVdd8F2GPDuxF4Cfnnsg/XP3OSxh5Ap\n' +
  'RSWYVwJAEUkw78btmzIvwSztUt+ao55t6fwqoVLl4aMBEjwdODPB7DjKQGk4zR1y\n' +
  'vYySkxWB5JyyYj88MJ4vqCZd73y1XwJAD9l4+DcaGevTNvvmTnkJSs+LI0RpC/Hp\n' +
  'c7T060ebWdQCy517D6HVU96jMKKFULwIpyLOkw8AFfvKrCzu8LNHewJBALFSNdle\n' +
  'XX5yzD1eMbIRTMKZ8PlD8JdFoPjX7sq5JLURjPkoc/Z6kNoLpDrvgW4U0Ipk/xiz\n' +
  'Yn9C33IPqIqjg5k='



  // 加密
  function encrypt(txt) {
    const encryptor = new JSEncrypt()
    encryptor.setPublicKey(publicKey) // 设置公钥
    return encryptor.encrypt(txt) // 对数据进行加密
  }

  // 解密
  function decrypt(txt) {
    const encryptor = new JSEncrypt()
    encryptor.setPrivateKey(privateKey) // 设置私钥
    return encryptor.decrypt(txt) // 对数据进行解密
  } 


  export default {
    data: () => ({

        // 表单数据
        formValue:{
            name: 'admin',   
            password:'admin123',
            code:""    
        },

        logoImage: require("@/assets/login-logo.png"),
        visible: false,

        data64Image:"",
        uuid:""
    }),
    created(){
      this.initFunc()
    },
    methods:{
        async initFunc(){
          const {uuid,img}=await codeHTTP()
          // console.log(img)

          this.data64Image=`data:image/gif;base64,${img}`
          this.uuid=uuid
        },
        async loginHandle () {
            const {uuid}=this;
            const {code}=this.formValue
            const {name,password} = this.formValue
            const {valid} = await this.$refs.form.validate()




            if(!valid){
              // alert('表单不完整！')
              return
            }

            const {data}=await loginHTTP({
              payload:{
                code: code,
                uuid: uuid,
                username:name,
                password:encrypt( password )
              }
            });

            // console.log(data)

            this.$store.dispatch("bufferLoginMessageStore", data ) // 缓存登录信息
            // console.log(  this.$store.state.actionsStore.bufferLoginMessage  )

            showSuccessToast('登录成功！');
            this.$router.push("/");


        },
        getCode(){
          this.initFunc()
        }
    }
  }
</script>
  

  