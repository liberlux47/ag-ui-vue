import { ref, computed } from 'vue'

export function useStreamingMessage() {
    const chunks = ref<string[]>([])
    const isStreaming = ref(false)

    const content = computed(() => chunks.value.join(''))

    function startStream() {
        chunks.value = []
        isStreaming.value = true
    }

    function appendChunk(delta: string) {
        chunks.value.push(delta)
    }

    function endStream() {
        isStreaming.value = false
    }

    return { chunks, isStreaming, content, startStream, appendChunk, endStream }
}
