Vue.component('messageform',{
  template:

  `
<div class="justify-to-center" :class="{fadeInImage:!isActive}">  
  <form class="contactform" @submit.prevent="onSubmit">
      <p id="questions">Do you have any questions?</p>
      <p id="required" v-if="errors.length" >
          <ul>
          <li v-for="error in errors">{{error}}</li>
          </ul>
      </p>
      <div class="form-row">
          <div class="col">
              <input v-model="subject" type="text" class="form-control smallimput" placeholder="Subject">
          </div>
          <div class="col">
              <input v-model="email" type="text" class="form-control smallimput" placeholder="your e-mail adress">
          </div>
          <div class="col ">
              <textarea v-model="message_content" id="text" name="text" rows="8" cols="45" class="form-control overflow-auto message"></textarea>
          </div>
        
      </div> 
      <div  id="button-sent"> 
              <input type="submit" value="send">
      </div>
  </form>      
</div>

 `,


 data() {
   return {
      subject: null,
      email: null,
      message_content: null,
      errors:[],
      
   }
 },
  
methods: {
  onSubmit(){
    this.errors= []
    if (this.subject && this.email && this.message_content){
        let message={
        subject: this.subject,
        email: this.email,
        message_content: this.message_content,
      }
      localStorage.setItem("savedMessage",JSON.stringify(message))
      window.location.href="../../message-confirmation.html"

      this.subject= null
      this.email= null
      this.message_content=null
    }
    else {
      if(!this.subject) this.errors.push("subject required!")
      if(!this.email) this.errors.push("E-mail required!")
      if(!this.message_content) this.errors.push("You need to type your message!")
  
    }
  } 
}
})