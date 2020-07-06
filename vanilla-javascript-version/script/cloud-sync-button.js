window.onload = () => {
	function aniBtn(opt = {}) {
		const btn = document.querySelector('.button')
		const loadBg = btn.querySelector('.buttonBackground')
		let initStyle = () => {
			btn.style.background = opt.btnColor || "#725fdf"
			loadBg.style.background = opt.loadColor || "#81d427"
			btn.style.color = opt.strokeColor || "#fff"
			btn.querySelectorAll('svg').forEach(item => {
				item.style.fill = opt.strokeColor || "#fff"
			})
			btn.querySelector('.buttonCheck__path').style.stroke = opt.strokeColor || "#fff"
		}
		initStyle()
		let all = 100
		let start = 0
		let status = "start"
		let isLoaded = () => {
			if (start >= all) {
				status = "complete"
				btn.classList.remove("button_start")
				btn.classList.remove("button_loading")
				btn.classList.add("button_loaded")
			}
		}
		let initSync = () => {
			start = 0
			status = "init"
			loadBg.style.width = start + "%"
			btn.classList.remove("button_start")
			btn.classList.add("button_loading")
		}
		let updateSync = (data) => {

			if (status === "init" || status === "update") {
				start += data
				status = "update"
				loadBg.style.width = start + "%"
				isLoaded()
			}

		}
		let completeSync = () => {
			if (status === "update") {
				start = all
				status = "complete"
				loadBg.style.width = start + "%"
				isLoaded()
			}
		}
		let resetSync = () => {
			status = "start"
			btn.classList.remove("button_loaded")
			btn.classList.remove("button_loading")
			btn.classList.add("button_start")
			all = 100
			start = 0
			loadBg.style.width = start + "%"
		}
		btn.addEventListener("click", initSync)
		return {
			initSync: initSync,
			updateSync: updateSync,
			completeSync: completeSync,
			resetSync: resetSync
		}
	}
	const aBtn = aniBtn({
		loadColor: "#81d427",
		strokeColor: "#fff",
		btnColor: "#725fdf"
	})
	const update = document.querySelector('.update')
	const init = document.querySelector('.init')
	const complete = document.querySelector('.complete')
	const reset = document.querySelector('.reset')
	init.addEventListener("click", () => {
		aBtn.initSync()
	})
	update.addEventListener("click", () => {
		aBtn.updateSync(5)
	})
	complete.addEventListener("click", () => {
		aBtn.completeSync()
	})
	reset.addEventListener("click", () => {
		aBtn.resetSync()
	})
}