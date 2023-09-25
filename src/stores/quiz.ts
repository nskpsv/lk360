import { defineStore } from "pinia"

export const useQuizStore = defineStore('quiz', {
    state: () => {
        return {
            progress: {
                total: 15,
                current: 1
            }
        }
    },
    actions: {
        nextStep() {
            this.progress.current++
        }
    }
})