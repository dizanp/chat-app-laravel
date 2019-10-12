import Bus from './bus'

Echo.join('channel-chat')
    .here((users) => {
        //emit siapa yang disini
        Bus.$emit('chat.here', users)
    })
    
    .joining((user) => {
        //emit siapa yang bergabung
        Bus.$emit('chat.joining', user)
    })

    .leaving((user) => {
        //emit siapa yang keluar
        Bus.$emit('chat.leaving', user)
    })
    
    .listen('ChatCreated', (e) => {
        //bebas
        console.log('berhasil')
        Bus.$emit('chat.sent', e.message)
    })