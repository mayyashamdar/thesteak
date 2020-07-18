(function () {
	const remove_explore = (function () {
		const elements = document.querySelector("a[data-testid=\"AppTabBar_Explore_Link\"]");
		if (elements !== null) {
			elements.remove();
			console.info('delete <a data-testid=\"AppTabBar_Explore_Link\"></a>')
		}
	})

	const exp_observer = new MutationObserver(remove_explore);
	exp_observer.observe(document.getElementById('react-root'), {
		childList: true,
		subtree: true
	});

	const remove_column = (function () {
		const elements = document.querySelector("div[data-testid=\"sidebarColumn\"]");
		if (elements !== null) {
			elements.remove();
			console.info('delete <div data-testid=\"sidebarColumn\"></div>')
		}
	})

	const col_observer = new MutationObserver(remove_column);
	col_observer.observe(document.getElementById('react-root'), {
		childList: true,
		subtree: true
	});
})()
