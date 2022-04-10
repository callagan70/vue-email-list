// VueJS

var app = new Vue({
    el: '#root',
// SECTION DATA
    data: {
     
    },
// !SECTION DATA fine

// SECTION Created
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function(response) {
                        console.log(response);
                    });
    },
// !SECTION Created fine

// SECTION Methods
    methods: {

    },
// !SECTION Methods
  });