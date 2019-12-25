<template>
  <div>
      <b-form-select v-model="selectedDrink">
        <option v-for="drink in drinks" :value="drink">{{ drink.label }}</option>
      </b-form-select>
       <br><br>
      <b-form-select v-model="selectedOption">
        <option v-for="option in selectedDrink.options">{{ option }}</option>
      </b-form-select>

      <p v-if="selectedDrink&&selectedOption">
        You selected a {{ selectedDrink.label }} and specifically {{ selectedOption }}.
      </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      drinks:[
              {
                label:"Beer",
                options:["Sam Adams","Anchor Steam","St. Arnold"]
              },
              {
                label:"Soda",
                options:["Pepsi","Coke","RC"]
              },
              {
                label:"Coffee",
                options:["Starbucks","Dunkin Donuts","Gross Hotel Room"]
              }
            ],

            selectedDrink:'',
            selectedOption:''
      }
    }
  }
</script>
