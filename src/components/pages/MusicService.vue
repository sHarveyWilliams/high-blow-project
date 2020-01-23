<template>
    <main>
        <section class="player-beatstars">
            <div class="title-music-service">
                <span>Music Service</span>
            </div>
            <div class="prompt-message">
                <span>
                    We make profeesional music production for serious artists. Much experience has been gained, over a period of many years creating beats / instrumentals.
We have over 200 satisfied customers and we are always ready to make high-quality beats / instrumentals for you.
                </span>
            </div>
            <div class="player-beatstars-container">
                <iframe src="https://player.beatstars.com/?storeId=81690" width="100%" height="1130" style="max-width:1663px;">
                    -- none --
                </iframe>
            </div>
        </section>
        <section class="player-youtube mixer-bg">
            <div class="player-youtube-container">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nD_CTONaUd8" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="prompt-message-youtube">
                <div class="prompt-message-title-youtube">
                    <span>Youtube</span>
                </div>
                <div class="prompt-message-text-youtube">
                    <span>FOLLOW US ON YOUTUBE
SUBSCRIBE TO BE THE FIRST  TO WATCH
NEW RELEASES
</span>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
    export default {
        name: "MusicService"
    }
</script>

<style scoped>
    iframe {
        color: white;
        border: none;
    }

    .title-music-service {
        text-transform: uppercase;
        color: white;
        font-size: 7.1rem;
    }

    .player-beatstars {
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        width: 100%;
        padding: 149px 0;
    }

    .prompt-message {
        color: white;
        font-size: 1.8rem;
        padding: 30px 0 100px 0;
        text-align: center;
        width: 40%;
    }

    .player-beatstars-container {
       width: 80%;
    }

    @media only screen
    and (min-width: 1824px) {

        .player-beatstars-container {
            width: 1663px;
        }

    }

    .player-youtube {
        display: flex;
        justify-content: center;
        padding: 76px 0;
        height: auto;
        width: 100%;
    }

    .player-youtube-container {
        width: 1009px;
        height: 558px;
    }

    .prompt-message-youtube {
        color: white;
        font-size: 1.8rem;
        padding-left: 40px;
        text-align: left;
        width: 350px;
    }

    .prompt-message-title-youtube {
        font-size: 4.4rem;
        font-weight: 600;
        text-transform: uppercase;
        padding-bottom: 20px;
    }

    .prompt-message-text-youtube {
        text-align: start;
        font-size: 1.8rem;
    }

</style>
