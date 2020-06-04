<template>
  <div id="app">
    <div class="panel">
			<button @click="startSync">Start Sync</button>
			<button @click="syncProgress = 20">syncProgress = 20</button>
			<button @click="syncProgress += 10">syncProgress += 10</button>
			<button @click="completeSync">Complete Sync</button>			
			<button @click="stopSync">Cancel Sync</button>
		</div>
    
    <CloudSyncButton 
      title="Sync"
      titleDone="Done"
      :syncProgress=syncProgress
      :inSync=inSync
      :styling="{
        loadColor: '#81d427',
        strokeColor: '#fff',
        btnColor: '#725fdf',

        loadColor1: '#011e4a',
        strokeColor: '#fff',
        btnColor: '#011e4a'
      }"
      @click.native="startSync"
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
      syncProgress: 0,
      inSync: false,
    }    
  },
  methods: {
    startSync() {
      this.syncProgress = 0;
      this.inSync = true;
    },
    stopSync() {
      this.syncProgress = 0;
      this.inSync = false;
    },
    completeSync() {
      this.syncProgress = 100;
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
