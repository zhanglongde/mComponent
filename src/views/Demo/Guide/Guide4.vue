<template>
    <div>
        引导页4
        <button>
          <router-link to="/demo">进入</router-link>
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            vuegConfig: {
                disable: true
            }
        }
    }
}
</script>
<style scoped>
div {
    background: linear-gradient(to bottom, #ede574, #e1f5c4);
}

button {
    background: none;
    border-radius: 5px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 150px;
    height: 40px;
    border: 1px solid rgba(244, 67, 54, 0.5);
    color: rgba(244, 67, 54, 0.5);
    font-size: 20px;
    line-height: 20px;
}
</style>
