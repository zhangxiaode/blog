//映射Redux state到组件的属性
function mapStateToProps(state) {
    return { menuIndex: state.menuIndex }
}
//action
const changeMenuIndex = {
    type:'CHANGE_MENU_INDEX',
    text:-1
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        changeMenuIndex:()=>dispatch(changeMenuIndex)
    }
}
export {mapStateToProps, mapDispatchToProps}
