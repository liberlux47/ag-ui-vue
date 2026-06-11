<template>
    <div class="flex-w-full" :class="isUser ? 'justify-end' : 'justify-start'">
        <div
            class="max-w-[75%] rounded-2xl px-4 py-2 text-sm"
            :class="
                isUser
                    ? 'rounded-br-sm bg-blue-600 text-white'
                    : 'rounded-bl-sm bg-gray-100 text-gray-900'
            "
        >
            <!-- Streaming content -->
            <span v-if="content">{{ content }}</span>

            <!-- Typing indicator -->
            <span v-else class="flex gap-1">
                <span
                    v-for="n in 3"
                    :key="n"
                    class="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60"
                    :style="{ animationDelay: (n - 1) * 150 + 'ms' }"
                ></span>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        content?: string
        role: 'user' | 'assistant'
    }>()

    const isUser = props.role === 'user'
</script>
