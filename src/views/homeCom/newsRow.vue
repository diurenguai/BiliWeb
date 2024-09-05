<template>
    <div class="newsRow">
        <span class="newsRow-rank">{{ rank }}</span>
        <a class="newsRow-title" href= {{Link}} > {{ title }}</a>
    </div>
</template>

<script >
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'newsRow',
    props: {
        Link: {
            type: String,
            default:' ',
        },
        title: {
            type: String,
            default:'新闻标题',
        },
        rank: {
            type: Number,
            default:1,
        }
    },
    setup(props) {
        return {
            props
        }
    }
})

</script>
<style lang="scss" scoped>
.newsRow{
    display: flex;
    flex-direction: row;
    //justify-content: center;
    align-items: center;
    background-color: white;
    width: 50%;
    font-size: 20px;
    //padding: 10px 0;
    //text-align: center;
    &-rank{
        padding-left: 20%;
    }
    &-title{
        
        text-decoration: none;
        color: black;
        margin-left: 5%;
    }

}
.newsRow:hover{
    background-color: #E3E5E7;
}
</style>