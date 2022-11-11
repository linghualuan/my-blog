<template>
    <li class="dropdown-option" :class="{'isDisable': disabled}">
        <slot></slot>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'DropdownItem',
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style>
.dropdown-option.isDisable * {
    color: #ccc;
    pointer-events: none;
    background-color: transparent;
}
</style>