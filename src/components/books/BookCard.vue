<template>
    <div class="bg-blue-400 h-72 w-36">
        <img :src="volumeInfo.imageLinks.smallThumbnail" alt="">
        <h1>{{volumeInfo.title}}</h1>
        <p>{{volumeInfo.subtitle}}</p>
        <p>{{volumeInfo.authors[0]}}</p>
        <p>pages:{{volumeInfo.pageCount}}</p>
    </div>
</template>

<script>
    export default {
        name:"BookCard",
        props: {
            book: {
                type: Object,
            },
        },
        computed: {
            volumeInfo() {
                return this.book.volumeInfo; 
            }
        },
    }
</script>

<style lang="postcss" scoped>

</style>