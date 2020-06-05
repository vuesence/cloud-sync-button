<template>
  <div id="app">

    <h1>Cloud Sync Button (<a href="https://github.com/altrusl/vuesence-cloud-sync-button" target="_blank" rel="noopener noreferrer">GitHub</a>)</h1>
    
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
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 15px 50px 0;
}
button {
  margin: 10px 15px 10px 0;
  padding: 5px 20px;
  font-size: 1.1em;
}
h1 a {
  color: #555;
  text-decoration: none;
  font-size: 0.7em;
}
</style>
