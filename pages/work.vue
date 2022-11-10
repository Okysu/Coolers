<template>
    <div>
        <div id="worksCard">
            <div v-for="list in data">
                <img :src="list.avatar" alt="Coolers">
                <div class="nickname">
                    {{ list.name }}
                </div>
                <div class="text">
                    {{ list.desc }}
                </div>
                <div class="ations">
                    <div v-if="list.github" @click="toUrl(list.link)">
                        项目主页
                    </div>
                    <div v-if="list.github" @click="toUrl(list.github)">
                        项目仓库
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const toUrl = (url: string) => {
    window.open(url)
}
const data = ref([])
onMounted(async () => {
    const res = await axios.get('https://source.yby.zone/coolers/more/work.json')
    data.value = res.data
})
</script>

<style scoped>
#worksCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
}

#worksCard div {
    width: 45%;
    height: 180px;
    background-color: #fff;
    border: 3px solid #000;
    margin: 10px 0;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

@media only screen and (max-width: 550px) {
    #worksCard div {
        width: 100%;
    }

    #worksCard div .text {
        min-width: calc(100% - 170px);
    }
}

#worksCard div img {
    min-width: 100px;
    min-height: 100px;
    max-width: 100px;
    max-height: 100px;
    transform: translateY(-30px);
    border: 3px solid #000;
}

#worksCard div img:hover {
    transform: translateY(-30px) scale(1.1);
    transition: transform 0.5s;
}

#worksCard div .text {
    margin-left: 120px;
    width: calc(45% - 155px);
    height: 100px;
    font-size: 16px;
    color: gray;
    position: absolute;
    float: right;
    overflow: auto;
    padding: 2px;
}

#worksCard div .nickname {
    width: 106px;
    height: 30px;
    padding: 0;
    transform: translateY(-30px);
    background-color: #000;
    color: #fff;
    text-align: center;
}

#worksCard div .ations {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    transform: translateY(-45px);
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}


#worksCard div .ations div {
    padding: 0;
    width: 45%;
    height: 30px;
    background-color: #fff;
    margin: 5px 0;
    text-align: center;
    justify-content: center;
    float: left;
    position: absolute;
}

#worksCard div .ations div:first-child {
    margin-left: 50%;
}

#worksCard div .ations div:hover {
    background-color: #000;
    color: #fff;
    transition: background-color 0.5s;
}

</style>