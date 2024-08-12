<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">회원가입</div>
          <div class="card-body">
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="name">이름</label>
                    <input type="text" class="form-control" id="name" v-model="name" required>
                </div>
                <div class="form-group">
                    <label for="loginId">아이디</label>
                    <input type="text" class="form-control" id="loginId" v-model="loginId" required>
                </div>
                <div class="form-group">
                    <label for="password">비밀번호</label>
                    <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">비밀번호 확인</label>
                    <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
                    <small :class="{'text-success': password !== '' && password === confirmPassword, 'text-danger': password !== confirmPassword}" v-if="password !== '' && confirmPassword !== ''">
                        {{ password !== confirmPassword ? '비밀번호가 일치하지 않습니다.' : '비밀번호가 일치합니다.' }}
                    </small>
                </div>
                <div class="form-group">
                    <label for="email">이메일</label>
                    <input type="email" class="form-control" id="email" v-model="email" required>
                </div>
                <button type="submit" class="mt-3 btn btn-primary btn-block">가입하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import bcrypt from 'bcryptjs';

export default {
  data() {
    return {
        name: '',
        loginId: '',
        password: '',
        confirmPassword: '',
        email: '',
        test: ''
    };
  },
  methods: {
    async register() {

        if(this.password != this.confirmPassword){
            return alert('비밀번호를 다시 한번 확인해 주세요.');
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(this.password, salt);
        
        const userData = {
            name: this.name,
            loginId: this.loginId,
            password: hashedPassword,
            email: this.email
        };

        console.log(userData);

        try {
            this.apiProductList = await this.$api("http://192.168.21.134:8080/api/user/sign", "post", userData);

            alert('회원가입에 성공했습니다!');

            this.$router.push('/test');

        } catch (error) {
            console.error('회원가입 실패:', error);
        }
    }
  }
};
</script>
