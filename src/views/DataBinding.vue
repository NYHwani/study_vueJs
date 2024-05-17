<template>
    <h1>Hello, {{title}}</h1>
    <h1 v-html='htmlString'></h1>    
    <input type="number" v-model.number="valueModel" />
    <br>
    <textarea v-model="message"></textarea>
    <br>
    <select v-model="city">
        <option value="a">서울</option>
        <option value="b">인천</option>
        <option value="c">부산</option>
        <option value="d">경기</option>
    </select>
    <br>
    <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{checked}}</label>
    <br>
    <div>
        <label><input type="checkbox" value="서울" v-model="checkedCity">서울</label>
        <label><input type="checkbox" value="부산" v-model="checkedCity">부산</label>
        <label><input type="checkbox" value="경기" v-model="checkedCity">경기</label>
        <br>
        <span>체크한 지역 : {{ checkedCity }} </span>
    </div>
    <div>
        <label><input type="radio" v-bind:value="raidovalue1" v-model="picked">서울</label>
        <label><input type="radio" v-bind:value="raidovalue2" v-model="picked">부산</label>
        <label><input type="radio" v-bind:value="raidovalue3" v-model="picked">경기</label>
        <br>
        <span>체크한 지역 : {{ picked }} </span>
    </div>
    <div>
        <img :src="imgSrc" >
    </div>
    <div>
        <input type="text" v-on:input="setOrderDate" />
    </div>
    <div>
        <input type="text" v-model="textValue" v-on:input="test" />
        <button type="button" :disabled="textValue=='yes'"> Click </button>
    </div>
    <div>
        <div v-bind:class="{'active' : isActive, 'text-red' : hasError}">class</div>
    </div>
</template>

<script>

    export default {
        name: "DataBinding",
        data() {
            return {
                title : "World",
                htmlString : "<p style='color:red'>zzzzzz</p>",
                valueModel : 4,
                message : "여러 줄을 입력할 수 있음",
                city : "d",
                checked : "yes",
                checkedCity : [],
                picked : '',
                raidovalue1 : '서울',
                raidovalue2 : '부산',
                raidovalue3 : '경기',
                imgSrc : "https://kr.vuejs.org/images/logo.png",
                textValue : 'yes',
                isActive : true,
                hasError : false
            }
        },
        methods: {
            setOrderDate : function(e) {
                console.log(e.target.value);
            },
            test : function(e) {
                this.textValue = e.target.value
            }
        },
        props: {
            name: {
                type: String,
                default: "",
            },
        },
        created() {
            console.log(this.$route.params.userNo);
        }
    }
</script>
<style>
    .active {color : #00ff06}
    .text-red {color : #ff0000}
</style>