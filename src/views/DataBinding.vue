<template>
    <h1>Hello, {{title}}</h1>

    <div><PageTitle :title="title" ref="refPageTitle" /></div>        

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
        <div v-bind:style="styleObject">style</div>
        <div v-bind:style="[styleObject, styleAdd]">style</div>
    </div>

    <div v-bind:key="i" v-for="(product, i) in productList">
        <div>{{i+1}} {{product.name}} {{product.price}}</div>
    </div>

    <div v-if="isCheck">True 입니다.</div>
    <div v-else>False 입니다.</div>

    <div v-if="isStr == 'A'">A 입니다.</div>
    <div v-else-if="isStr == 'B'">B 입니다.</div>
    <div v-else>C 입니다.</div>

    <div v-show="bShow">하이염</div>

    <div @click="fnClick('클릭'), fnTwoClick()">클릭해보세요</div>
    <div>카운트 : {{count}}</div>

    <select v-model="selectValue" @change="fnSelectChange">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
    </select>

    <div><input type="text" @keyup.alt.enter="clear" /></div>
    <div><input type="text" @click.ctrl="doSomething" /></div>
    <div>{{firstName + " " + lastName}}</div>
    <div>getFullName : {{getFullName()}}</div>
    <div>computed : {{fullName}}</div>
    <div>watch : {{watchFullName}}</div>
    <button type="button" @click="changeName">변경</button>
    <button type="button" @click="getList">리스트</button>

    <table>
        <tr ref="target" :key="i" v-for="(product, i) in apiProductList">
            <td>{{i}}</td>
            <td>{{product.product_name}}</td>
            <td>{{product.price}}</td>
        </tr>
    </table>
</template>

<script>

    import PageTitle from '../components/PageTitle';

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
                textValue : 'no',
                isActive : true,
                hasError : false,
                styleObject : {
                    color : "red",
                    fontSize : "25px"
                },
                styleAdd : {
                    color : "black",
                    fontSize : "15px"
                },
                productList : [
                    {name : "테스트 상품1", price : 1000},
                    {name : "테스트 상품2", price : 5000}
                ],
                isCheck : true,
                isStr : "B",
                bShow : true,
                count : 0,
                selectValue : "a",
                firstName : "첫 번째 변수",
                lastName : "두 번째 변수",
                watchFullName : "",
                apiProductList : []
            }
        },
        methods: {
            setOrderDate : function(e) {
                console.log(e.target.value);
            },
            test : function(e) {
                this.textValue = e.target.value
            },
            fnClick : function(text) {
                alert(text);
                this.count = this.count + 1;
            },
            fnTwoClick : function() {
                alert("오호");
            },
            fnSelectChange : function() {
                alert(this.selectValue);
            },
            doSomething : function() {
                alert(1);
                this.lastName = "zzzz";
            },
            clear : function() {
                alert(1);
            },
            getFullName : function() {
                return this.firstName + ' ' + this.lastName;
            },
            changeName : function() {
                this.firstName = "change";
            },
            async getList() {
                this.apiProductList = await this.$api("https://aa85ba6f-4e5c-4311-996e-ffbe87b65488.mock.pstmn.io/list", "get");
                console.log(this.apiProductList);
            }
        },
        computed : {
            fullName : function() {
                return this.firstName + ' ' + this.lastName;
            }
        },
        watch : {
            firstName : function() {
                this.watchFullName = this.firstName + ' ' + this.lastName;
            }
        },
        props: {
            name: {
                type: String,
                default: "",
            },
        },
        created() {
            this.getList();
            console.log("created a");
            console.log(this.apiProductList);
        },
        mounted() {
            console.log("mounted a");
            console.log(this.apiProductList);
            this.$nextTick(() => {
                console.log("mounted b");
                console.log(this.apiProductList);
            });
        },
        beforeUpdate() {
            console.log("beforeUpdate d");
            console.log(this.apiProductList);
            this.$refs.refPageTitle.fnTest();
        },
        components : {PageTitle}
    }
</script>
<style>
    .active {color : #00ff06}
    .text-red {color : #ff0000}
</style>