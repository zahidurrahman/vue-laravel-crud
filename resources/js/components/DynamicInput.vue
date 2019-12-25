<template>
 <div>

  <div class="form-group" v-for="(input,k) in inputs" :key="k">
    <input type="text" class="form-control" v-model="input.name">
    <br>
    <span>
        <b-button type="submit" variant="danger" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">Remove</b-button>
        <b-button type="reset" variant="success" @click="add(k)" v-show="k == inputs.length-1">ADD</b-button>

    </span>
  </div>
  <button  v-on:click="say('hi')">Show</button>
  <pre>
    <p>{{inputs}}</p>
</pre>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      inputs: [
           {
               name: ''
           }
       ]
      }
    },
    methods: {
        add(index) {
            this.inputs.push({ name: '' });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },
        say: function (x) {
          alert(x);
        }
    }
  }
</script>
