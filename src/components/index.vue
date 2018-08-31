<template>
    <div class="index">
        跳转到相应页面:
        <router-link :to="{name: 'stateCode'}">状态码</router-link>
        <router-link :to="{name: 'html'}">html面试题</router-link>
    </div>
</template>
