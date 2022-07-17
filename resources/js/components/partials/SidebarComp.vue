<template>
    <div class="container">

        <div class="category-list">
            <h3>Categorie: </h3>

            <ul>
                <li v-for="category in categories"
                :key="`cat${category.id}`"
                @click="$emit(searchPostsByCategory, category.slug)">{{ category.name }}</li>
            </ul>
        </div>

        <div class="tag-list">
            <h3>Tags:</h3>

            <ul>
                <li v-for="tag in tags"
                    :key="`tag${tag.id}`"
                    @click="$emit(searchPostsByTag, tag.slug)">{{ tag.name }}</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SidebarComp',
    props: {
        categories: Array,
        tags: Array
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
    }

    li {
        cursor: pointer;
    }
</style>
