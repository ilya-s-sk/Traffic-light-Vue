<template>
  <div class="home">
      <div class="container">
        <Light v-for="color in colors" :key="colors.indexOf(color)" 
               :color="color"
               :activeColor="activeColor"
               :timer="timer"
               :blinked="blinked" />

      </div>
  </div>
</template>

<script>
import Light from '@/components/Light'
export default {
    name: "home",
    components: {
        Light
    },
    data() {
        return {
            colors: ['red', 'yellow', 'green'],
            colorsOrder: ['red', 'yellow', 'green', 'yellow'],
            activeColorIndex: 0,
            timer: 10,
            interval: null,
            activeColor: 'red',
            blinked: false
        }   
    },
    methods: {
        start() {
            this.timer--;
            if(this.timer < 3) {
                this.blinked = true
            }
            if (this.timer == 0) {
                this.activeColorIndex = this.activeColorIndex === this.colorsOrder.length - 1 
                                        ? 0 
                                        : ++this.activeColorIndex;
                this.blinked = false;
            }
        }
    },
    created() {
        this.interval = setInterval(this.start, 1000);
        if (this.$route.params.id && this.$route.params.id !== this.activeColor) {
            const color = this.$route.params.id;
            const index = this.colorsOrder.indexOf(color);
            if (index === -1) this.$router.replace(`/red`);
            this.activeColorIndex = index;
        }  
    },
    watch: {
        '$route'() {
            if (this.$route.params.id !== this.activeColor) {
                const color = this.$route.params.id;
                const index = this.colorsOrder.indexOf(color);
                if (index === -1) this.$router.replace(`/red`);
                this.activeColorIndex = index;
            }  
        },
        activeColorIndex() {
            this.blinked = false;
            this.activeColor = this.colorsOrder[this.activeColorIndex];
            if (this.$route.params.id !== this.activeColor) {
                this.$router.replace(`/${this.activeColor}`);
            }
            switch(this.activeColor){
                case 'red':
                    this.timer = 10;
                    break;
                case "yellow":
                    this.timer = 3;
                    break;
                case "green":
                    this.timer = 15;
                    break;
            }
        }
    }
}
</script>

<style>
.container{
    width: 180px;
    height: 450px;
    margin: 0 auto;
    padding: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border-radius: 20px;
    border: 3px solid black;

    box-shadow: 4px 38px 62px rgba(0, 0, 0, 0.5);
    background-color: #5b6467;
    background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
}
</style>
