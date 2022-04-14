// VueJS

var app = new Vue(
    {
    el: '#root',
// SECTION DATA

    data: {
        emailObj : [ ]
    },

// !SECTION DATA fine

// SECTION Created
    created(){
        for (let i=1; i <= 10; i++)
        {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then( (res) => {

                        // console.log('res.data.response: ' + res.data.response);
                        
                        // this.emailData = res.data.response
                        this.emailObj.push(res.data.response);

                            // console.log('emailData: ' + res.data.response)
                            console.log('emailObj: ' + this.emailObj)

                        }
                    )
        };
    },
// !SECTION Created fine

mouted() {


},

// SECTION Methods
    methods: {

    },
    
// !SECTION Methods
  });