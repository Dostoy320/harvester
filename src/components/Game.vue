<script lang="ts">
    export default {
        name: 'Game',
        data: function () {
            return {
                downloaded: false,
                gameInstance: null,
                containerId: 'game-container'
            }
        },
        async mounted() {
            const game = await import('../game/game');
            this.downloaded = true;
            this.$nextTick(() => {
                this.gameInstance = game.launch(this.containerId);
            })
        },
        destroyed() {
            this.gameInstance.destroy(false);
        }
    }
</script>

<template>
    <div :id="containerId" v-if="downloaded" />
    <div class="placeholder" v-else>
        Initializing...
    </div>
</template>

<style scoped>
    #game-container {
        height: 700px;
        width: 1000px;
    }
</style>