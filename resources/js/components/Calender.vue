<script src="https://unpkg.com/vue"></script>
<template>
 <div>
 <form @submit.prevent="setMyDateToToday">
 <input type="date" v-model="myDate.name">
 <input type="date" v-model="myDate.author">
        <button type="submit" class="btn btn-primary">Add Book</button>
  </form>
   <p>
   <code>

   myDate: {{ myDate }}</code>

   </p>

   <button @click="setMyDateToToday">Set date one to today</button>
   <button @click="addADayToMyDate">Add a day to my date</button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
      message: 'Hello Vue.js!',
      myDate: {}
      }
    },//date
    methods: {
   setMyDateToToday() {
    // this.myDate = new Date();

        this.axios
            .post('/api/book/add', this.myDate)
            .then((response) => {
            this.myDate = response.data;
                alert(this.myDate.name);
            });

   },
   addADayToMyDate() {
     if (this.myDate) // as myDate can be null
       // you have to set the this.myDate again, so vue can detect it changed
       // this is not a caveat of this specific solution, but of any binding of dates
       this.myDate = new Date(this.myDate.setDate(this.myDate.getDate() + 1));
   },
 }
  }
</script>
