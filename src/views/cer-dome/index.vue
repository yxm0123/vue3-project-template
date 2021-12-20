<template>
  <div class="home">
    dome {{$t('publics.dome')}}
  </div>
</template>

<script lang="ts">
import { defineComponent,onMounted } from "vue";
import { getUser } from '@/api/cer-dome/index';
export default defineComponent({
  name: "Dome",
  setup(){
    onMounted(()=>{
      test()
    })
    const  test = async ()=>{
      try {
        await getUser();
      }catch (e){
        console.log(e);
      }
    };
    return{}
  }
});
</script>
