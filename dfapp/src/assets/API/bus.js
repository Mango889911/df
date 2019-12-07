import Vue from "vue"
var bus=new Vue({
    data(){
        return {uname:''}
    },
    beforeCreate(){
        this.$on("saveuname",function(uname){
            this.uname=uname;
        });
    }
});
export {bus}