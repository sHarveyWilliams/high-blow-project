<template>
    <div class="social-networks-container">
        <div class="prompt-message">
            <span>Follow the news</span>
        </div>

        <a href="//www.behance.net/highblowmg"
           class="button social-networks-button social-networks-button_behance">Behance</a>

        <a href="http://google.com" class="button social-networks-button">GMail</a>

        <a href="http://google.com"
           class="button social-networks-button social-networks-button_vk">VK</a>

        <a href="http://google.com"
           class="button social-networks-button social-networks-button_twitter">Twitter</a>

    </div>
</template>

<script>
    export default {
        name: "SocialNetworksLinks"
    }
</script>

<style scoped>

    .prompt-message {
        color: white;
        font-size: 2.9rem;
        font-weight: 600;
        width: 70%;
        margin-bottom: 20px;
    }

    .social-networks-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 326px;
    }

    .social-networks-button {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 5px;
        background-color: #A31717;
        color: white;
        font-size: 2.2rem;
        height: 48px;
        width: 100%;
        border: none;
        border-radius: 10px;
    }

    .social-networks-button:hover {
        animation-duration: 1s;
        animation-name: slide;
        animation-fill-mode: both;
    }

    .social-networks-button_behance {
        background-color: #1E3993;
    }

    .social-networks-button_vk {
        background-color: #2699E2;
    }

    .social-networks-button_twitter {
        background-color: #1F85EA;
    }

    @keyframes slide {
        from {
            margin-left: 0
        }

        to {
            margin-left: -50px;
        }
    }

</style>
