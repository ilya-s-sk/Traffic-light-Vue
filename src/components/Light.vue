<template>
    <div class="light-box"
         :class="{'glow': isActive}">
        <div
            class="light" 
            :class="[{'turned-on': isActive}, {'blink': isActive && blinked}, color]">
            <span v-if="isActive" class="timer">
                {{timer}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Light",
    props: {
        color: {
            type: String
        },
        activeColor: {
            type: String
        },
        timer: {
            type: Number
        },
        blinked: {
            type: Boolean
        }
    },
    computed: {
        isActive() {
            return this.activeColor === this.color
        }
    }
}
</script>

<style>

.light-box {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid black;
    background-color: rgb(23,23,23);
}

.light{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: .2;

    display: flex;
    justify-content: center;
    align-items: center;
}
.red {
    background-color: #FC5753;
    box-shadow: 3px 1px 22px 24px rgba(255, 0, 0, .2);
}
.yellow {
    background-color: #FDBC40;
    box-shadow: 3px 1px 22px 24px rgba(255, 255, 0, .2);
}
.green {
    background-color: #36C84B;
    box-shadow: 3px 1px 22px 24px rgba(0, 255, 0, .2);
}
.turned-on {
    opacity: 1;
}

.timer {
    font-size: 2.5rem;
    color: rgb(23,23,23);
}

.blink {
    animation: blink 1s infinite;
}
@keyframes blink {
    0% { opacity: 1}
    50% { opacity: .2}
}
</style>