<template>
  <div>
    <form action="#">
        <div class="form-group">
        <textarea name="name" rows="4" v-model="body"
          @keydown="handleInput" 
          placeholder="isi chat disini"></textarea>
        </div>
    </form>
  </div>
</template>

<script>
    import moment from 'moment'
    import Bus from '../../bus'
    export default {
            data() {
                return {
                  body: null
                }
            },

            methods: {
                handleInput(e){
                  if(e.keyCode === 13 && !e.shiftKey ){
                    e.preventDefault()
                    this.submit()
                  }
                },
                submit(){
                  if(!this.body || !this.body.trim() === ''){
                    return
                  }

                  let newMessage = {
                    id: Date.now(),
                    subject: this.body.trim(),
                    created_at: moment().utc(0).format('YYYY-MM-DD HH:mm:ss'),
                    user:{
                      name: Laravel.user.name
                    }
                  }

                  let backup = this.body.trim()
                  Bus.$emit('chat.sent', newMessage)
                  this.body = ''

                  //ngirim lewat axios
                  axios.post('/messages', {subject: backup})
                    .then(response => {
                      console.log('pesan masuk')
                    })

                    .catch(() => {
                      this.body = backup
                      Bus.$emit('chat.removed', newMessage)
                      console.log('ada error')
                    })
                }
            },
    }
</script>

<style lang="scss">
  textarea{
    width: 100%;
    border: none;
  }
</style>