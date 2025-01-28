<script setup>
import Container from '@/layouts/Container.vue'
import Navigations from './Navigations.vue';
</script>

<template>
  <header class="w-full">
    <Container>
      <div class="flrx items-center justify-between p-3 border-b-1 border-[#C4C4C4] w-full">
        <div class="flex items-center p-0 m-0">
          <!--logo section-->
          <RouterLink to="/" class=" flex items-center ">
            <h1>Tutorify</h1>
          </RouterLink>
        </div>
        <div class="flex items-center justify-around">
          <div class="flex items-center">
            <!--menu-->
            <Navigations /> 
          </div>
          <div class="flex items-center justify-between gap-5">
            <!--register-->
            <RouterLink to="/login">
                <button class="text-white bg-[#407F55] rounded-[8px] flex items-center justify-center w-[102px] h-[44px] p-0 m-0">
                وارد شوید
            </button>
            </RouterLink>
            <RouterLink to="/singup">
                <button class="flex items-center justify-center w-[102px] h-[44px] rounded-[8px] bg-[#FB9C46] text-white">
                ساخت حساب
            </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

