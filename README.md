# Cloud Sync Button

Vue.js component representing button with cloud synchronization animation

![VB-preview](https://altrusl.github.io/vuesence-cloud-sync-button/csb.gif)

# How to use

This component consists of one `CloudSyncButton.vue` file that can be copy-pasted into your Vue.js project or can be plugged in as an NPM package:

```bash
npm install @vuesence/cloud-sync-button --save
```

Then you can use it in the your Vue code:

```html
<template>
	<div id="app">
		<CloudSyncButton
			title="Sync"
			titleDone="Done"
			@click.native="startSync"
			:syncProgress="syncProgress"
			:inSync="inSync"
			:styling="{
                loadColor: '#81d427',
                strokeColor: '#fff',
                btnColor: '#011e4a'
            }"
		/>
	</div>
</template>

<script>
	import CloudSyncButton from "@vuesence/cloud-sync-button";

	export default {
		name: "App",
		components: {
			CloudSyncButton,
		},
		data() {
			return {
				syncProgress: 0,
				inSync: false,
			};
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
			},
		},
	};
</script>
```

Two reactive parameters handle the button state: `inSync` - starts and stops the synchronization,
and `syncProgress` - shows the synchronization progress.

`startSync`, `stopSync` and `completeSync` methods are used to manage the button representation programmatically.

For more details please see an example of usage in the `App.vue`

## Demo

<a href="https://altrusl.github.io/vuesence-cloud-sync-button/" target="_blank">https://altrusl.github.io/vuesence-cloud-sync-button/</a>

## Playground

Try it on <a href="https://codesandbox.io/s/cloud-sync-button-hv9dr" target="_blank">codesandbox.io</a>

<!-- > ! The version on `codesandbox.io` might be slightly out of date -->

## Troubleshooting

Any bugs, issues, feature and pull requests are welcome

Please use GitHub's issue reporter or send me an <a href="mailto:ruslan.makarov@gmail.com">email</a>

## Contribution

Contribution is always welcome and recommended. Here is how:

-   Fork the repository
-   Clone to your machine
-   Make your changes
-   Create a pull request

## License

**@vuesence/cloud-sync-button** package is freely distributable under the terms of the [MIT license](LICENSE).
