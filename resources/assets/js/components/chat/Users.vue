<template>
    <div class="panel panel-info">
        <div class="panel-heading">
            Daftar user yang online : {{users.length}}
        </div>
            <div class="panel-body">
                <ul>
                    <li v-for="user in users">
                        {{user.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Bus from '../../bus'
    export default {
        data(){
            return{
                users: []
            }
        },
        mounted() {
            Bus.$on('chat.here', (users) => {
                this.users = users
            }).$on('chat.joining', (user) => {
                this.users.push(user)
            }).$on('chat.leaving', (user) => {
                this.users = this.users.filter((u) => {
                    return u.id !== user.id
                })
            })
        }
    }
</script>
