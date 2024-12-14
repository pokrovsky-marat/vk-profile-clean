const postMenus = document.querySelectorAll(
  '[data-testid="post_context_menu_toggle"]'
);

// Функция для удаления постов с использованием задержки между действиями
async function deletePosts() {
  for (const menu of postMenus) {
    // Кликаем на меню поста
    menu.click();
    await new Promise((resolve) => setTimeout(resolve, 200)); // Ждём, пока меню откроется

    // Кликаем на кнопку удаления
    const deleteButton = document.querySelector(
      'svg[class*="vkuiIcon--delete"]'
    )?.parentElement;
    if (deleteButton) {
      deleteButton.click();
      await new Promise((resolve) => setTimeout(resolve, 50)); // Ждём, пока действие завершится
    }
  }
}
// Запускаем функцию
deletePosts();
