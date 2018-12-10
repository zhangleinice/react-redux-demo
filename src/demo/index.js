
let appState = {
    title: {
      text: 'React.js 小书',
      color: 'red',
    },
    content: {
      text: 'React.js 小书内容',
      color: 'blue'
    }
  }
  
 export function dispatch(action) {
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
        appState.title.text = action.text
        break
      case 'UPDATE_TITLE_COLOR':
        appState.title.color = action.color
        break
      default:
        break
    }
  }

  export function themeReducer (state, action) {
    if (!state) return {
      themeName: 'Red Theme',
      themeColor: 'red'
    }
    switch (action.type) {
      case 'UPATE_THEME_NAME':
        return { ...state, themeName: action.themeName }
      case 'UPATE_THEME_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
  }