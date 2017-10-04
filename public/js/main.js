$(document).ready(() => {
	$(`.delete-article`).on(`click`, e => {
		const $target = $(e.target)
		const id = $target.attr(`data-id`)

		$.ajax({
			method: `DELETE`,
			url: `/article/${id}`,
			success: response => {
				alert(`Deleting article`)
				console.log(response)
				window.location.href = `/`
			},
			error: err => {
				console.log(err)
			},
		})
	})
})
