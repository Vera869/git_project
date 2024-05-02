// валидация логина
export const handleLoginChange = (event, setLoginError) => {
  const loginValue = event.target.value.trim()
  let errors = []

  if (!loginValue) {
    errors.push(`Поле "логин" обязательно для заполнения`)
  } else {
    const loginPattern = /^[a-zA-Z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+$/

    if (!loginPattern.test(loginValue)) {
      errors.push('Должны быть только латинские буквы/цифры')
    }

  }

  setLoginError(errors);
}
