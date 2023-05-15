function testAlert() {
	alert("Это тестовый алёрт!");
}

function clearNavigationStack() {
    // Очистка истории навигации
    history.pushState(null, '', location.href);
    history.replaceState(null, '', location.href);
}

function displayConfirm(question) {
    confirm(question);
}
