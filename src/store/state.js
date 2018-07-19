//映射Redux state到组件的属性
function mapStateToProps(state) {
    return { text: state.text }
}
export default mapStateToProps