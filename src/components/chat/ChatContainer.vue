<template>
    <!-- Message list -->
    <div ref="containerRef" class="flex h-full flex-col">
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
            <slot name="messages" />
        </div>

        <!-- Divider -->
    <div class="border-t"/>

    <!-- Input area -->
     <div class="p-4">
        <slot name="input" />
     </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'

const containerRef = ref<HTMLDivElement | null>(null)

function scrollToBottom() {
    if (containerRef.value) {
        const el = containerRef.value.querySelector('.overflow-y-auto')
        if (el) el.scrollTop = el.scrollHeight
    }
}


// Scroll to bottom on mount and whenever messages update
onMounted(scrollToBottom)
onUpdated(scrollToBottom)

defineExpose({ scrollToBottom })
</script>