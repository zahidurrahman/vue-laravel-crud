
<template>
 <div>
   <button @click="shownotification">Add a day to my date</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },//date
    methods: {
    shownotification() {
      this.$notification.new("hello world", {  timer: 2 });
   },
 }
  }
</script>
