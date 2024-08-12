<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">회원가입</div>
          <div class="card-body">
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="username">아이디</label>
                    <input type="text" class="form-control" id="username" v-model="username" required>
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
export default {
  data() {
    return {
        username: '',
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
        
        const userData = {
            username: this.username,
            password: this.password,
            email: this.email
        };

        console.log(userData);

        try {
            this.apiProductList = await this.$api("https://aa85ba6f-4e5c-4311-996e-ffbe87b65488.mock.pstmn.io/list", "get", userData);

            alert('회원가입에 성공했습니다!');

            this.$router.push('/test');

        } catch (error) {
            console.error('회원가입 실패:', error);
        }
    }
  }
};
</script>
