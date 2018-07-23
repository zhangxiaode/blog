//映射Redux state到组件的属性
function mapStateToProps(state) {
    return { text: state.text }
}
//action
const changeTextAction = {
    type:'CHANGE_TEXT'
}
const buttonClickAction = {
    type:'BUTTON_CLICK'
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        onButtonClick:()=>dispatch(buttonClickAction),
        onChangeText:()=>dispatch(changeTextAction)
    }
}
export {mapStateToProps, mapDispatchToProps}
