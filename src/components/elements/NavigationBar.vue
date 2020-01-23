<template>
    <div>
        <nav class="nav-properties">
            <div class="center-nav nav-position">
                <div class="logo">
                    <img src="../../assets/logo.png">
                </div>
                <ul class="navigation-menu">
                    <li>
                        <router-link to="/home">
                            <span class="navigation-menu-element-animation">Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/layouts">
                        <span class="navigation-menu-element-animation">
                            Layouts Catalog
                        </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/portfolio">
                            <span class="navigation-menu-element-animation">Portfolio</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/musicservice">
                            <span class="navigation-menu-element-animation">Music Service</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact">
                            <span class="navigation-menu-element-animation">Contact Us</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="line-gray"></div>
    </div>
</template>

<script>
    export default {
        name: "NavigationBar"
    }
</script>

<style scoped>
    ul {
        display: flex;
    }

    li {
        margin: 10px;
    }

    .navigation-menu-element-animation:hover {
        animation-duration: 1s;
        animation-name: opacity-animation;
        animation-fill-mode: both;
    }

    .nav-properties {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #a20606;
        height: 90px;
    }

    ul {
        display: none;
    }

    @media only screen
    and (min-device-width : 1024px) {

        ul {
            display: flex;
        }

        .nav-properties {
            height: 120px;
        }
    }

    @media only screen
    and (min-width: 1824px) {

        ul {
            display: flex;
        }

        .nav-properties {
            height: 190px;
        }
    }

    span {
        color: white;
        font-size: 2.3rem;
    }

    .navigation-menu {
        text-transform: uppercase;
    }

    .line-gray {
        height: 3px;
        background-color: #dbdbdb;
    }

    .nav-position {
        display: flex;
        justify-content: space-around;
    }

    .logo {
        display: flex;
        position: relative;
        max-width: 78px;
        max-height: 61px;
    }

    img {
        width: 100%;
        height: auto;
    }

    a:hover {
        background-color: transparent;
    }

</style>
