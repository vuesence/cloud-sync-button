<template>
  <div id="app">
    <div class="panel">
			<button @click="startSync">Start Sync</button>
			<button @click="progress = 20">progress = 20</button>
			<button @click="progress += 10">progress += 10</button>
			<button @click="completeSync">Complete Sync</button>			
			<button @click="stopSync">Cancel Sync</button>
		</div>
    
    <CloudSyncButton 
      title="Sync"
      titleDone="Done"
      :progress=progress
      :inSync=inSync
      :styling="{
        loadColor: '#81d427',
        strokeColor: '#fff',
        btnColor: '#725fdf',

        loadColor1: '#011e4a',
        strokeColor: '#fff',
        btnColor: '#011e4a'
      }"
      @click="startSync"
    />
    
  </div>
</template>

<script>
import CloudSyncButton from './components/CloudSyncButton.vue'

export default {
  name: 'App',
  components: {
    CloudSyncButton
  },
  data() {
    return {
      progress: 0,
      inSync: false,
    }    
  },
  methods: {
    startSync() {
      this.progress = 0;
      this.inSync = true;
    },
    stopSync() {
      this.progress = 0;
      this.inSync = false;
    },
    completeSync() {
      this.progress = 100;
      setTimeout(() => {
        this.stopSync();
      }, 2000);
    }
  }
}
</script>

<style>
html, body {
  height:100%;
  padding:0;
  margin:0;
}
body {
  /* color: #2c3e50; */
  /* margin: 20px; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  margin: 0 0.5em 70px 0;
  padding: 5px 20px;
  font-size: 1.1em;
}
</style>
