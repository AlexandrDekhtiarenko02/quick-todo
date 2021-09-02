export interface ILANGUAGES_ITEM {
	ua: string
	ru: string
	eng: string
}
interface ILANGUAGES {
	drafts: ILANGUAGES_ITEM
	tags: ILANGUAGES_ITEM
	completedTodos: ILANGUAGES_ITEM
	removeProject: ILANGUAGES_ITEM
	addProjectNamePlaceholder: ILANGUAGES_ITEM
	addProjectColorPlaceHolder: ILANGUAGES_ITEM
	addTagNamePlaceholder: ILANGUAGES_ITEM
	addTagColorPlaceHolder: ILANGUAGES_ITEM
	addButton: ILANGUAGES_ITEM
	addButtonTodoList: ILANGUAGES_ITEM
	cancelButton: ILANGUAGES_ITEM
	selectTheProjectForDisplay: ILANGUAGES_ITEM
	settingsLabel: ILANGUAGES_ITEM
	logoutLabel: ILANGUAGES_ITEM
	emptyList: ILANGUAGES_ITEM
	sortingLabel: ILANGUAGES_ITEM
	sortingByAlphabet: ILANGUAGES_ITEM
	sortingByPriority: ILANGUAGES_ITEM
	addTodoTitlePlaceholder: ILANGUAGES_ITEM
	addTodoDescriptionPlaceholder: ILANGUAGES_ITEM
	productivityTitle: ILANGUAGES_ITEM
	productivityCompletedTodosLable: ILANGUAGES_ITEM
	karmaPoints: ILANGUAGES_ITEM
	yourLevelTitle: ILANGUAGES_ITEM
	leftToTheNextLevel: ILANGUAGES_ITEM
	todaysSuccessTitle: ILANGUAGES_ITEM
	todaysSuccessDescription: ILANGUAGES_ITEM
	lastMonthSuccess: ILANGUAGES_ITEM
	lastMonthSuccessDescription: ILANGUAGES_ITEM
	nameLabel: ILANGUAGES_ITEM
	surnameLabel: ILANGUAGES_ITEM
	dayGoalLabel: ILANGUAGES_ITEM
	languageLabel: ILANGUAGES_ITEM
	dangerZoneLabel: ILANGUAGES_ITEM
	resetStatisticLabel: ILANGUAGES_ITEM
	resetStatisticDescription: ILANGUAGES_ITEM
	resetStatisticButton: ILANGUAGES_ITEM
	removeAccountLabel: ILANGUAGES_ITEM
	removeAccountDescription: ILANGUAGES_ITEM
	removeAccountButton: ILANGUAGES_ITEM
	saveChangesButton: ILANGUAGES_ITEM
	priorityLabel: ILANGUAGES_ITEM
	editTodoLabel: ILANGUAGES_ITEM
	editTodoTitleLabel: ILANGUAGES_ITEM
	editTodoDesctiptionLabel: ILANGUAGES_ITEM
	changeButton: ILANGUAGES_ITEM
	maxStatisticLevel: ILANGUAGES_ITEM
	receivedBonus: ILANGUAGES_ITEM
	selectProject: ILANGUAGES_ITEM
	removeTag: ILANGUAGES_ITEM
	dublicateTodo: ILANGUAGES_ITEM
	howToUseLabel: ILANGUAGES_ITEM
	registerLabel: ILANGUAGES_ITEM
	signInLabel: ILANGUAGES_ITEM
	homeTitle: ILANGUAGES_ITEM
	clearYourMind: ILANGUAGES_ITEM
	clearYourMindDescription: ILANGUAGES_ITEM
	alwaysAtHand: ILANGUAGES_ITEM
	alwaysAtHandDescription: ILANGUAGES_ITEM
	ampleOpportunities: ILANGUAGES_ITEM
	structuringLabel: ILANGUAGES_ITEM
	structuringDescription: ILANGUAGES_ITEM
	sortingHomeLabel: ILANGUAGES_ITEM
	sortingDescription: ILANGUAGES_ITEM
	tagsHomeLabel: ILANGUAGES_ITEM
	tagsHomeDescription: ILANGUAGES_ITEM
	startButton: ILANGUAGES_ITEM
	enterName: ILANGUAGES_ITEM
	enterSurname: ILANGUAGES_ITEM
	enterEmail: ILANGUAGES_ITEM
	enterPassword: ILANGUAGES_ITEM
	confirmPassword: ILANGUAGES_ITEM
	or: ILANGUAGES_ITEM
	continueWithGoogle: ILANGUAGES_ITEM
	continueWithFacebook: ILANGUAGES_ITEM
	orRegisterLabel: ILANGUAGES_ITEM
	orRegisterLink: ILANGUAGES_ITEM
	orSignInLabel: ILANGUAGES_ITEM
	orSingInLink: ILANGUAGES_ITEM
	registerButton: ILANGUAGES_ITEM
}

export const languages: ILANGUAGES = {
	///Main///

	drafts: {
		ua: 'Проекти',
		ru: 'Проекты',
		eng: 'Projects',
	},
	tags: {
		ua: 'Мітки',
		ru: 'Метки',
		eng: 'Tags',
	},
	completedTodos: {
		ua: 'Виконані ToDo',
		ru: 'Выпполненые ToDo',
		eng: 'Completed ToDo',
	},
	removeProject: {
		ua: 'Видалити проект',
		ru: 'Удалить проект',
		eng: 'Remove project',
	},
	addProjectNamePlaceholder: {
		ua: 'Придумайте назву проекту',
		ru: 'Придумайте название проекта',
		eng: 'Come up with a project name',
	},
	addProjectColorPlaceHolder: {
		ua: 'Виберіть колір проекту',
		ru: 'Виберите цвет проекта',
		eng: 'Choose the color of the project',
	},
	addTagNamePlaceholder: {
		ua: 'Придумайте назву мітки',
		ru: 'Придумайте название метки',
		eng: 'Come up with a tag name',
	},
	addTagColorPlaceHolder: {
		ua: 'Виберіть колір мітки',
		ru: 'Виберите цвет метки',
		eng: 'Choose the color of the tag',
	},
	addButton: {
		ua: 'Додати',
		ru: 'Добавить',
		eng: 'Add',
	},
	addButtonTodoList: {
		ua: 'Додати ToDo',
		ru: 'Добавить ToDo',
		eng: 'Add ToDo',
	},
	cancelButton: {
		ua: 'Відміна',
		ru: 'Отмена',
		eng: 'Cancel',
	},
	selectTheProjectForDisplay: {
		ua: 'Виберіть проект для відображення ваших ToDo',
		ru: 'Выберите проект для отображения ваших ToDo',
		eng: 'Select a project to display your ToDo',
	},
	settingsLabel: {
		ua: 'Налаштування',
		ru: 'Настройки',
		eng: 'Settings',
	},
	logoutLabel: {
		ua: 'Вийти',
		ru: 'Выйти',
		eng: 'Logout',
	},
	emptyList: {
		ua: 'Тут поки що пусто. Додайте нове ToDo.',
		ru: 'Здесь пока пусто. Добавьте новое ToDo.',
		eng: 'It is still empty here. Add a new ToDo.',
	},
	sortingLabel: {
		ua: 'Сортування',
		ru: 'Сортировка',
		eng: 'Sorting',
	},
	sortingByAlphabet: {
		ua: 'Сортувати по алфавіту',
		ru: 'Сортировать по алфавиту',
		eng: 'Sort by alphabet',
	},
	sortingByPriority: {
		ua: 'Сортувати по приорітету',
		ru: 'Сортировать по приоритету',
		eng: 'Sort by priority',
	},
	addTodoTitlePlaceholder: {
		ua: 'напр., купити продукти на сьогодні',
		ru: 'напр., купить продукты на сегодня',
		eng: 'e.g. buy products for today',
	},
	addTodoDescriptionPlaceholder: {
		ua: 'Опис',
		ru: 'Описание',
		eng: 'Description',
	},
	productivityTitle: {
		ua: 'Ваша продуктивність',
		ru: 'Ваша продуктивность',
		eng: 'Your productivity',
	},
	productivityCompletedTodosLable: {
		ua: 'Всього виконаних задач',
		ru: 'Всего выполненых задач',
		eng: 'Total completed tasks',
	},
	karmaPoints: {
		ua: 'Очок карми',
		ru: 'Очков кармы',
		eng: 'Karma points',
	},
	yourLevelTitle: {
		ua: 'Ваш рівень',
		ru: 'Ваш уровень',
		eng: 'Your level',
	},
	leftToTheNextLevel: {
		ua: 'очок карми до рівня',
		ru: 'очков кармы до уровня',
		eng: 'karma points to the level',
	},
	todaysSuccessTitle: {
		ua: 'Cьогоднішні успіхи',
		ru: 'Сегодняшний успех',
		eng: "Today's success",
	},
	todaysSuccessDescription: {
		ua: 'Досягнута ціль за день дає +25 xp до вашої карми',
		ru: 'Достигнутая цель за день дает +25 xp к вашей карме.',
		eng: 'The goal achieved for the day gives +25 xp to your karma.',
	},
	lastMonthSuccess: {
		ua: 'Ваш успіх за останні 30 днів',
		ru: 'Ваш успех за последние 30 дней',
		eng: 'Your success in the last 30 days',
	},
	lastMonthSuccessDescription: {
		ua: 'Кількість виконаних ToDo за кожен день',
		ru: 'Количество выполненных ToDo за каждый день',
		eng: 'The number of ToDo completed for each day',
	},
	nameLabel: {
		ua: "Ім'я",
		ru: 'Имя',
		eng: 'Name',
	},
	surnameLabel: {
		ua: 'Прізвище',
		ru: 'Фамилия',
		eng: 'Surname',
	},
	dayGoalLabel: {
		ua: 'Ціль за день',
		ru: 'Цель за день',
		eng: 'Day goal',
	},
	languageLabel: {
		ua: 'Мова',
		ru: 'Язык',
		eng: 'Language',
	},
	dangerZoneLabel: {
		ua: 'Небезпечна зона',
		ru: 'Опасная зона',
		eng: 'Danger zone',
	},
	resetStatisticLabel: {
		ua: 'Скидання статистики',
		ru: 'Сброс статистики',
		eng: 'Reset statistics',
	},
	resetStatisticDescription: {
		ua: 'Ваш поточний рівень, очки та статистика за останні 30 днів будуть скинуті.',
		ru: 'Ваш текущий уровень, очки и статистика за последние 30 дней будут сброшены.',
		eng: 'Your current level, points and statistics from the last 30 days will be reset.',
	},
	resetStatisticButton: {
		ua: 'Cкинути статистику',
		ru: 'Сбросить статистику',
		eng: 'Reset statistic',
	},
	removeAccountLabel: {
		ua: 'Видалити акаунт назавжди',
		ru: 'Удалить аккаунт навсегда',
		eng: 'Delete account permanently',
	},
	removeAccountDescription: {
		ua: 'Всі ваші дані, включаючи завдання, проекти і не тільки будуть відразу видалені без можливості відновлення.',
		ru: 'Все ваши данные, включая задачи, проекты и не только будут сразу удалены без возможности восстановления.',
		eng: 'All your data, including tasks, projects and more, will be immediately deleted without the possibility of recovery.',
	},
	removeAccountButton: {
		ua: 'Видалити акаунт',
		ru: 'Удалить аккаунт',
		eng: 'Delete account',
	},
	saveChangesButton: {
		ua: 'Зберегти зміни',
		ru: 'Сохранить изменения',
		eng: 'Save changes',
	},
	priorityLabel: {
		ua: 'Приорітет',
		ru: 'Приоритет',
		eng: 'Priority',
	},
	editTodoLabel: {
		ua: 'Змінити ToDo',
		ru: 'Изменить ToDo',
		eng: 'Edit ToDo',
	},
	editTodoTitleLabel: {
		ua: 'Введіть заголовок ToDo',
		ru: 'Введите заголовок ToDo',
		eng: 'Enter the title ToDo',
	},
	editTodoDesctiptionLabel: {
		ua: 'Введіть опис ToDo',
		ru: 'Введите описание Todo',
		eng: 'Enter the desctiption ToDo',
	},
	changeButton: {
		ua: 'Змінити',
		ru: 'Изменить',
		eng: 'Change',
	},
	maxStatisticLevel: {
		ua: 'Ви досягли максимального рівня',
		ru: 'Вы достигли максимального уровня',
		eng: 'You have reached the maximum level',
	},
	receivedBonus: {
		ua: 'Ви вже отримали сьогогдні бонус',
		ru: 'Вы уже получили сегодня бонус',
		eng: 'You have already received a bonus today',
	},
	selectProject: {
		ua: 'Виберіть проект для відображення ваших Todos',
		ru: 'Выберите проект для отображения ваших ToDo',
		eng: 'Выберите проект для отображения ваших ToDo',
	},
	dublicateTodo: {
		ua: 'Дублювати ToDo',
		ru: 'Дублировать ToDo',
		eng: 'Dublicate ToDo',
	},
	removeTag: {
		ua: 'Видалити мітку',
		ru: 'Удалить метку',
		eng: 'Remove tag',
	},

	///Main///

	///Home///
	howToUseLabel: {
		ua: 'Як користуватись',
		ru: 'Как пользоваться',
		eng: 'How to use',
	},
	registerLabel: {
		ua: 'Регистрація',
		ru: 'Регистрация',
		eng: 'Registration',
	},
	signInLabel: {
		ua: 'Увійти',
		ru: 'Войти',
		eng: 'Sign in',
	},
	homeTitle: {
		ua: 'Організуйте власні справи з QUICK TODO',
		ru: 'Организуйте собственные дела с QUICK TODO',
		eng: 'Organize your own affairs with QUICK TODO',
	},
	clearYourMind: {
		ua: 'Очистіть свій розум',
		ru: 'Очистите свой ум',
		eng: 'Clear your mind',
	},
	clearYourMindDescription: {
		ua: 'Перенесіть ваші ідеї і завдання з голови в QUICK TODO і звільніть місце для нових завдань.',
		ru: 'Перенесите ваши идеи и задачи из головы в QUICK TODO и освободите место для новых задач.',
		eng: 'Transfer your ideas and tasks from your head to QUICK TODO and make room for new tasks.',
	},
	alwaysAtHand: {
		ua: 'Завжди під рукою',
		ru: 'Всегда под рукой',
		eng: 'Always at hand',
	},
	alwaysAtHandDescription: {
		ua: 'Перенесіть ваші ідеї і завдання з голови в QUICK TODO і звільніть місце для нових завдань.',
		ru: 'Быстро проверяйте ваши дела в любой момент времени и в любой точке мира, используя мобильную версию QUICK TODO.',
		eng: 'Quickly check your affairs at any time and anywhere in the world using the mobile version of QUICK TODO.',
	},
	ampleOpportunities: {
		ua: 'Широкі можливості',
		ru: 'Широкие возможности',
		eng: 'Ample opportunities',
	},
	structuringLabel: {
		ua: 'Структуризація',
		ru: 'Структуризация',
		eng: 'Structuring',
	},
	structuringDescription: {
		ua: 'Створюйте іменовані папки з завданнями і задавайте папок колір.',
		ru: 'Создавайте именованные папки с задачими и задавайте папкам цвет.',
		eng: 'Create named task folders and color the folders.',
	},
	sortingHomeLabel: {
		ua: 'Cортування',
		ru: 'Сортировка',
		eng: 'Sorting',
	},
	sortingDescription: {
		ua: 'Сортуйте ваші завдання за різними умовами',
		ru: 'Сортируйте ваши задачи за различными условиями',
		eng: 'Sort your tasks under different conditions',
	},
	tagsHomeLabel: {
		ua: 'Мітки',
		ru: 'Метки',
		eng: 'Tags',
	},
	tagsHomeDescription: {
		ua: 'Позначте ваші завдання різними мітками, щоб швидко орієнтуватися у ваших завданнях',
		ru: 'Помечайте ваши задачи различными метками, чтобы быстро ориентироваться у ваших задачах',
		eng: 'Mark your tasks with different labels to quickly navigate your tasks',
	},
	startButton: {
		ua: 'Почати',
		ru: 'Начать',
		eng: 'Start',
	},
	enterName: {
		ua: "Введіть ім'я",
		ru: 'Введите имя',
		eng: 'Enter your name',
	},
	enterSurname: {
		ua: 'Введіть прізвище',
		ru: 'Введите фамилию',
		eng: 'Enter  surname',
	},
	enterEmail: {
		ua: 'Введіть пошту',
		ru: 'Введите почту',
		eng: 'Enter email',
	},
	enterPassword: {
		ua: 'Введіть пароль',
		ru: 'Введите пароль',
		eng: 'Enter password',
	},
	confirmPassword: {
		ua: 'Введіть пароль ще раз',
		ru: 'Введите пароль ещё раз',
		eng: 'Enter password again',
	},
	or: {
		ua: 'або',
		ru: 'или',
		eng: 'or',
	},
	continueWithGoogle: {
		ua: 'Продовжити з Google',
		ru: 'Продолжить с Google',
		eng: 'Continue with Google',
	},
	continueWithFacebook: {
		ua: 'Продовжити з Facebook',
		ru: 'Продолжить с Facebook',
		eng: 'Continue with Facebook',
	},
	orRegisterLabel: {
		ua: 'Ще не зареестровані?',
		ru: 'Ещё не зарегистрированы?',
		eng: 'Not registered yet?',
	},
	orRegisterLink: {
		ua: 'Зарееструватися',
		ru: 'Зарегистроваться',
		eng: 'Register',
	},
	orSignInLabel: {
		ua: 'Вже зареестровані?',
		ru: 'Уже зарегистрированы?',
		eng: 'Already registered?',
	},
	orSingInLink: {
		ua: 'Увійти',
		ru: 'Войти',
		eng: 'Sign in',
	},
	registerButton: {
		ua: 'Зарееструватися',
		ru: 'Зарегистрироваться',
		eng: 'Register',
	},
	///Home///
}
