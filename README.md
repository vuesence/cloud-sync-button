# Cloud Sync Button

Button/progress-bar with cloud synchronization animation in vanilla JavaScript, Vue.js and Web component formats

![VB-preview](https://altrusl.github.io/vuesence-cloud-sync-button/csb.gif)

# How to use

This component is available in three versions:

1. Vue.js component - in the `src` directory
2. Vanilla JavaScript code - in the `vanilla-javascript-version` directory
3. As a `Web component` - in the `web-component-version` directory

## Vanilla JavaScript version

The code is self-explanatory

## Web Component version

It's built using Custom Elements - a well supported technology nowadays. For older browsers a polifill is available

```html
<cloud-sync-button options='{
	"loadColor": "#81d427",
	"strokeColor": "#fff",
	"btnColor": "#725fdf",
	"titleStart": "Sync",
	"titleEnd": "Done"
}' />
```

```javascript
const aBtn = document.querySelector("cloud-sync-button");
...
aBtn.initSync();
aBtn.updateSync(10);
aBtn.completeSync();
aBtn.resetSync();
```

## Vue version

Vue component consists of one `CloudSyncButton.vue` file that can be copy-pasted into your Vue.js project or can be plugged in as an NPM package:

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

> If you like it - star it. Thank you.


## Playground

Try it on <a href="https://codesandbox.io/s/cloud-sync-button-hv9dr" target="_blank">codesandbox.io</a>

<!-- > ! The version on `codesandbox.io` might be slightly out of date -->


## Check out my other Vue.js components

- <a href="https://github.com/altrusl/vuesence-book" target="_blank">Vuesence book</a> - minimalistic Vue.js based documentation system component
- <a href="https://github.com/altrusl/vuesence-sliding-header" target="_blank">Sliding header</a> - Vue.js component representing sliding header (or two different headers)


<img src="https://imgur.com/A92i02A.png" />
You like Sliding Header? GitHub star it and <a href="https://twitter.com/vuesence/status/1280130154090704896?s=20">twit it!</a>

-------

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
