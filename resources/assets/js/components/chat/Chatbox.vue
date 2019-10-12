<template>
    <div>
        <div class="panel panel-success">
            <div class="panel-heading">Chat Room</div>
                <div class="panel-body">
                    <chat-messages></chat-messages>
                    <chat-form></chat-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
