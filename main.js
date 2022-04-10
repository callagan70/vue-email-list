// VueJS

var app = new Vue({
    el: '#root',
// SECTION DATA
    data: {
     
        emailObj : " ",
        emailData: null,
    },
// !SECTION DATA fine

// SECTION Created
    created(){

        for (let i=1; i <= 10; i++)
        {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then( (res) => {

                        // console.log('res.data.response: ' + res.data.response);
                        
                        this.emailData = res.data.response
                        // emailData.push(this.emailObj);

                            console.log('emailData: ' + this.emailData)

                            // console.log('emailObj: ' + this.emailObj)
                        }
                    )
        };

    },
// !SECTION Created fine

// SECTION Methods
    methods: {

    },
// !SECTION Methods
  });