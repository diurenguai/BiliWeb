<template>
  <div ref="searchContainerRef" class="search">
    <div ref="contentRef" class="search-content">
      <input ref="searchRef" class="search-input" type="text" :placeholder=searchRecommend @input="submit">
      <a ref="btRef" class="search-btn" @click="submit">搜索</a>
    </div>
    <div ref="boxRef" class="search-box">
      <div class="search-box-history">
        <div class="search-box-history-firstRow">
          <span >搜索历史</span>
          <span ref="clearRef" class="clear" style="margin-right: 2%">清空</span>
        </div>
        <div ref="historyRef" class="search-box-history-content" >
          <historyCt  v-for="(item, index) in searchHistoryTemp" :key="index" :content=item></historyCt>
        </div>
        <div class="search-box-history-secondRow">
          <span style="padding-left: 2%;">热搜</span>
          <div class="search-box-history-secondRow-content">
              <newsRow v-for="(item, index) in newsRowTemp" :key="index" :title=item.title></newsRow>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import { defineComponent, ref, onMounted } from "vue"
import historyCt from './historyCt.vue'
import newsRow from './newsRow.vue'
export default defineComponent({
  name: 'SearchCo',
  components: {
    historyCt,newsRow
  },
  props: {
    searchRecommend: {
      type: String,
      default:'灵笼',
    },
  },
  setup(props, { emit }) {
    
    const searchRef = ref(null);
    const searchContainerRef = ref(null);
    const boxRef = ref(null);
    const contentRef = ref(null);
    const clearRef = ref(null);
    const historyRef = ref(null);
    //let temp = ['1', '2', '3'];
    // temp.reverse();

    let searchHistoryTemp = ref(['1', '2', '3']);
    let newsRowTemp = ref([
      {
        rank: 1,
        title: '哈哈',
        href: ''
      },
      {
        rank: 2,
        title: '哈哈2',
        href: ''
      }
    ]
    )
    searchHistoryTemp.value.reverse();
    //searchHistoryTemp.value = temp;
    //console.log(searchHistoryTemp.value);
    const submit = () => {
      if (searchRef.value.value == '') {
        emit("searchSubmit", searchRef.value.placeholder);
        if(!searchHistoryTemp.value.includes(searchRef.value.placeholder))
        searchHistoryTemp.value.unshift(searchRef.value.placeholder);
      }
      else {
        emit("searchSubmit", searchRef.value.value);
        if(!searchHistoryTemp.value.includes(searchRef.value.value))
        searchHistoryTemp.value.unshift(searchRef.value.value);
      }
      //console.log(searchHistoryTemp);

    }
    
    const addEvent = function () {
      searchRef.value.addEventListener('click', () => {
        //没有该类
        if (!contentRef.value.classList.contains('showContentBorder') && !boxRef.value.classList.contains('showBox')) {
          boxRef.value.classList.add('showBox');
          contentRef.value.classList.add('showContentBorder');
        }
      })
      document.addEventListener('mousedown', (event) => { 
        if (!(event.target == searchContainerRef.value || searchContainerRef.value.contains(event.target))) {
          if (contentRef.value.classList.contains('showContentBorder') && boxRef.value.classList.contains('showBox')) {
            boxRef.value.classList.remove('showBox');
            contentRef.value.classList.remove('showContentBorder');
          }
        }
      })
      clearRef.value.addEventListener('click', () => {
        //temp = [];
        searchHistoryTemp.value = [];
      })
    };
      onMounted(() => {
        addEvent();
    })
    return {
      props,submit,searchRef,searchContainerRef,boxRef,contentRef,clearRef,historyRef,searchHistoryTemp,newsRowTemp
    }
  }
})
</script>
<style lang="scss">
.search{
    position: relative;

    //background-color: white;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
 
    
    &-content{
        
        display: flex;
        position: absolute;
        width: 100%;
        height: 50px;
        position: relative;
        border-style: solid 2px;
        padding: 5px;
        background-color: rgba(#E3E8EC, 0.6);
        border-radius: 8px;
    }
    &-input{
        border: 0;
        outline: none;
        background-color: rgba(#E3E8EC, 0.6);
        width:100%;
        padding: 2px 0 2px 12px;
        border-radius:8px 0 0 8px;
        font-size: 17px;
        color: #7C848B;
        transition: all 0.3s;
    }
    &-btn{
        width:20%;
        height: 100%;
        display: block;
        text-align: center;
        background-color: rgba(#E3E8EC, 0.6);
        line-height: 50px;
        border-radius:0 8px 8px 0;
        cursor: pointer;
        transition: all 0.3s;
    }
    .search-content:hover &-btn{
        background-color:#E3E8EC;
    }
    .search-content:hover &-input{
        background-color: #E3E8EC;
    }
    .search-btn:hover{
        color: #00a1d6;
        background-color: #ADB1B6;
    }
    &-box{
        display: none;
        z-index: 10;
        background-color: white;
        width: 110%;
        border-radius: 0px 0px 8px 8px;
        box-shadow: 0 6px 10px 0 rgba(95,101,105,0.15);
        transition: all 0.1s;
        &-history{
            span{
                font-size:18px;
                display:block; 
                margin:15px 0;
            }
            &-firstRow{
                margin-left: 2%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items:center;
                .clear{
                    font-size:15px; 
                    color: #7D868D;
                    cursor: pointer;
                }
                .clear:hover{
                    color: #00a1d6;
                }
            }
            &-secondRow{
                &-content{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                //margin:15px 0;
            }
        }

    }
} 


.showContentBorder{
    border-radius: 8px 8px 0px 0px;
    .showContentBorder:hover{
        background-color: white;
    }
}
.showBox{
    display: block;

}


</style>

