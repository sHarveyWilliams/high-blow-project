<template>
    <footer>
        <div class="footer-add-info">
            <span>
            If you have any questions or need help? contact us now. support team will contact you within 12 hours
        </span>
        </div>
        <div class="footer-content">
            <div class="half-display-container">
                <div class="half-display-container-content">
                    <form
                            @submit="checkFormSubmit"
                            action="https://vuejs.org/"
                            method="post"
                            class="form-user-data"
                            id='#app'
                    >
                        <div class="input-container">
                            <div class="prompt-message">
                                <span>Please use the form below to get in touch with us</span>
                            </div>
                            <input v-on:keydown="checkForm"
                                   v-model="name"
                                   type="text"
                                   name="name"
                                   placeholder="Your Name"
                                   class="input-user-data"
                            >

                            <input
                                    v-on:keydown="checkForm"
                                    v-model="mail"
                                    name="mail"
                                    placeholder="Your Mail"
                                    class="input-user-data"
                            >
                            <textarea v-on:keydown="checkForm" v-model="textAreaUser" name="textAreaUser"
                                      placeholder="Write something.."
                                      class="input-user-data input-message"></textarea>
                            <button v-bind:class="{ 'form-button-transparent-valid': isValid }" type="submit"
                                    class="form-button-transparent form-button-transparent_gray">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="half-display-container">
                <div class="half-display-container-content">
                    <SocialNetworksLinks></SocialNetworksLinks>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <span>
            © 2012-2018 · HBDESIGN.com | Soundclick layouts online store · All Rights Reserved
        </span>
        </div>
    </footer>
</template>

<script>
    import SocialNetworksLinks from "./SocialNetworksLinks";
    export default {
        name: "FooterBar",
        components: {SocialNetworksLinks},
        data() {
            return {
                name: null,
                mail: null,
                textAreaUser: '',
                isValid: false
            }
        },

        methods: {
            checkForm: function () {


                this.isValid = !!(this.name && this.emailIsValid(this.mail) && this.textAreaIsValid(this.textAreaUser));
            },

            checkFormSubmit: function (event) {
                if (this.isValid) {
                    return true
                }

                event.preventDefault();

            },

            textAreaIsValid: function (textInput) {
                const minStringLength = 5;

                return textInput.length > minStringLength;
            },

            emailIsValid: function (email) {
                const emailExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                return emailExp.test(email);
            },
        }

    }
</script>

<style scoped>
    footer {
        background-color: black;
        height: 378px;
    }

    .footer-add-info {
        border-bottom: 1px solid #212121;
        color: white;
        font-size: 2rem;
        text-align: center;
        padding: 15px;
            text-transform: uppercase;
    }

    .half-display-container-content {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .form-user-data {
        color: white;
        background-color: black;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .footer-copyright {
        background-color: black;
        border-top: 1px solid #454545;
        color: white;
        font-size: 1.8rem;
        height: 91px;
        text-align: center;
        padding: 5px;
    }

    .footer-content {
        display: flex;
        background-color: black;
        min-height: 550px;
    }

    .half-display-container {
        display: flex;
        width: 50%;
    }

    .input-user-data {
        color: white;
        background-color: transparent;
        border-radius: 8px;
        height: 57px;
        width: 100%;
        border: 1px solid #969696;
        font-size: 2.1rem;
        padding-left: 10px;
        margin: 10px 0;
    }

    .input-message {
        width: 100%;
        height: 154px;
        resize: none;
        padding: 10px 10px;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        width: 518px;
    }

    .prompt-message {
        color: white;
        font-size: 2.9rem;
        font-weight: 600;
        width: 70%;
        margin-bottom: 20px;
    }

    .form-button-transparent {
        margin: 5px;
        background-color: transparent;
        font-size: 2.2rem;
        color: #2E2E2E;
        height: 56px;
        width: 208px;
        border: 1px solid #2E2E2E;
        border-radius: 10px;
    }

    .form-button-transparent_gray {
        border-color: #969696;
        color: #969696;
    }

    .form-button-transparent-valid {
        border: none;
        color: white;
        background-color: #A31717;
    }

</style>
