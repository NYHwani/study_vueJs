<template>
    <h1>테스트 하는 공간으로 사용하겠습니다.</h1>

    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">로그인</div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label for="username">아이디</label>
                                <input type="text" class="form-control" id="username" v-model="username" required>
                            </div>
                            <div class="form-group">
                                <label for="password">비밀번호</label>
                                <input type="password" class="form-control" id="password" v-model="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">로그인</button>
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
      password: ''
    };
  },
  methods: {
    async login() {
        
        const userData = {
            username: this.username,
            password: this.password
        };

        console.log(userData);

        try {
            this.apiProductList = await this.$api("https://aa85ba6f-4e5c-4311-996e-ffbe87b65488.mock.pstmn.io/list", "get", userData);
            console.log(this.apiProductList);

            alert('로그인에 성공했습니다!');

            this.$router.push('/test');

        } catch (error) {
            console.error('로그인 실패:', error);
        }
    }
  }
};
</script>