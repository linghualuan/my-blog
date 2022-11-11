<template>
    <div class="row header-img">
        <div class="col-12">
            <img src="../assets/团队协作.png" alt="" style='width: 100%;' />
        </div>
    </div>
    <router-link to="/createpost" class="btn btn-primary" style="text-algin: center">新建文章+</router-link>
    <h3 style="text-align: center">发现精彩</h3>
    <div class="row">
        <div class="col-4 mb-3" v-for="column in list" :key="column.id">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img 
                        :src="column.avatar ? column.avatar : require('../assets/找不到页面.png')"
                        :alt="column.title"
                        class='rounded-circle border border-light w-25 my-3'
                    />
                    <h2>{{column.title}}</h2>
                    <p>{{column.description}}</p>
                    <button class="btn btn-outline-primary" @click="goColumn(column.id)">进入专栏</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { ColumnProps } from '../testData'

export default defineComponent({
    name: 'ColumnList',
    props: {
        list: {
            type: Array as PropType<ColumnProps[]>,
            required: true
        }
    },
    setup() {
        const router = useRouter()
        const goColumn = (id: number) => {
            router.push({ name: 'Column', params: { id } })
        }
        return {
            goColumn
        }
    }
})
</script>

<style>
.header-img  {
    margin-bottom: 30px;
}
</style>