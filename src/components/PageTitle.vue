<template>
    <h2>{{title}}</h2>
    <button @click="messageClick">전송</button>
</template>

<script>
    export default {
        props : {
            title : {
                type : String,
            }
        },
        data() {
            return {

            }
        },
        methods : {
            fnTest() {
                console.log("child Test");
            },
            messageClick() {
                this.$emit('pageHandler', '자식이 부모 호출');
            }
        },
        created() {
            console.log("title " + this.title);
        },
        mounted() {
            console.log("title mounted a");
            console.log(this.title);
            this.$nextTick(() => {
                console.log("title mounted b");
                console.log(this.title);
            });
        },
        beforeUpdate() {
            console.log("title beforeUpdate d");
            console.log(this.title);            
        },
    }
</script>
