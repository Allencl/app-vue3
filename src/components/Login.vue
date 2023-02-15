<template>
    <div>
      <v-card
        class="mx-auto pa-4 pb-8"
        elevation="0"
        max-width="448"
        rounded="lg"
      >
        <v-img
            class="mx-auto mb-10"
            max-width="228"
            :src="logoImage"
        ></v-img>

        <v-form ref="form">
  
        <div class="text-subtitle-1 text-medium-emphasis">用户名</div>
  
        <v-text-field
            v-model="formValue.name"
          placeholder="请输入用户名"
          prepend-inner-icon="mdi-email-outline"
          variant="solo"
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
  export default {
    data: () => ({

        // 表单数据
        formValue:{
            name: '',   
            password:''    
        },

        logoImage: require("@/assets/login-logo.png"),
        visible: false,
    }),
    methods:{
        async loginHandle () {
            const { valid } = await this.$refs.form.validate()

            console.log( this.formValue )

            if(!valid){
                // alert('表单不完整！')
                return
            }

            this.$router.push("/home");
            // console.log( this.formValue )
        }
    }
  }
</script>
  

  