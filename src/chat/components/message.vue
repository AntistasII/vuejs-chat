<template>
    <div class="uk-grid uk-grid-small uk-child-width-auto chat-message"
         v-bind:class="{'uk-flex-bottom uk-flex-right uk-text-right chat-message_my': isCurUsrMsg}">
        <div class="uk-width-auto uk-flex uk-flex-bottom">
            <img class="uk-border-circle message__avatar" src="/images/avatar.png">
        </div>
        <div class="uk-width-auto">
            <div class="uk-comment uk-comment-primary uk-border-rounded uk-padding-small uk-padding-remove-top">
                <div class="uk-card-title">
                    <span>{{message.user.name}}</span>
                    <hr>
                </div>
                <div class="uk-card-media-bottom sticker" v-if="message.sticker && message.sticker.length > 0">
                    <img :src="message.sticker" alt="">
                </div>
                <p class="uk-margin-remove message__text" v-if="message.text && message.text.length > 0">{{message.text}}</p>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'Message',
    props: {
      message: Object
    },
    computed: {
      isCurUsrMsg: function () {
        return this.message.user.name === this.$store.state.user.name
      }
    }
  }
</script>

<style lang="less" scoped>
    .uk-card-title {
        hr {
            margin: 0;
        }

        span {
            font-size: 10pt;
        }
    }

    .uk-card {
        padding-top: 0;

        .sticker img {
            width: 100px;
            height: 100px;
        }
    }

    .chat-message {
        &.chat-message_my{
            .uk-comment {
                background-color: rgb(51, 153, 255);
                .uk-card-title {
                    span
                    {
                        color: white;
                    }
                }
            }


        }

        .message__avatar {
            height: 50px;
        }
    }

    .uk-comment
    {
        .uk-card-title {
            span
            {
                color: #666;
            }
        }

        .message__text
        {
            color: #111;
        }
    }
</style>