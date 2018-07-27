import React, { Component } from 'react';
import {Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil, convertToRaw, DefaultDraftBlockRenderMap} from 'draft-js';
import Immutable from 'immutable'
import './index.less';
const {isCtrlKeyCommand, hasCommandModifier } = KeyBindingUtil;
console.log(getDefaultKeyBinding)
// console.log(require('draft-js'))
var blockRenderMap = Immutable.Map({
  'header': {
    element: 'h1'
  },
  'blockquote': {
    element: 'blockquote'
  },
  'LINK':{
    element: 'a'
  }
})
blockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap)
// console.log(123,blockRenderMap)
class RichText extends Component {
  state = {
    formatBold: false,
    formatItalic: false,
    formatHeader: false,
    formatBlockquote: false,
    formatCode: false,
    orderedList: false,
    unorderedList: false,
    insertLink: false,
    insertImage: false,
    insertVideo: false,
    insertFormula: false,
    insertDivider: false,
    formatClear: false,
    dots: false,
    editorState: EditorState.createEmpty()
  }
  onChange = editorState => {
    this.setState({editorState});
  }
  handleKeyCommand = (command) => {
    var newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    switch(command){
      case "bold": 
        this.setState({formatBold: !this.state.formatBold})
        newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        break;
      case "italic": 
        this.setState({formatItalic: !this.state.formatItalic})
        newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        break;
      case "header": 
        this.setState({formatHeader: !this.state.formatHeader})
        newState = RichUtils.toggleBlockType(this.state.editorState,command)
        break;
      case "blockquote": 
        this.setState({formatBlockquote: !this.state.formatBlockquote})
        newState = RichUtils.toggleBlockType(this.state.editorState,command)
        break;
      case "code": 
        this.setState({formatCode: !this.state.formatCode})
        newState = RichUtils.toggleCode(this.state.editorState)
        break;
      case "orderedList": 
        this.setState({orderedList: !this.state.orderedList})
        newState = RichUtils.toggleBlockType(this.state.editorState,'ordered-list-item')
        break;
      case "unorderedList": 
        this.setState({unorderedList: !this.state.unorderedList})
        newState = RichUtils.toggleBlockType(this.state.editorState,'unordered-list-item')
        break;
      case "insertLink": 
        this.setState({insertLink: !this.state.insertLink})
        const contentState = this.state.editorState.getCurrentContent()
        const contentStateWithEntity = contentState.createEntity(
          'LINK',
          'MUTABLE',
          {url: 'https://myanbin.github.io/'}
        )
        console.log(111,contentStateWithEntity)
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
        console.log(222,entityKey)
        // const newEditorState = EditorState.set(this.state.editorState, { currentContent: contentStateWithEntity })
        RichUtils.toggleLink(this.state.editorState, this.state.editorState.getSelection(), entityKey)
        console.log(convertToRaw(this.state.editorState.getCurrentContent()))
        break;
      case "insertFormula": 
        this.setState({insertFormula: !this.state.insertFormula})
        break;
      case "insertDivider": 
        this.setState({insertDivider: !this.state.insertDivider})
        break;
      case "formatClear": 
        this.setState({formatClear: !this.state.formatClear})
        break;
      // case "split-block": 
      //   this.setState({formatItalic: !this.state.insertUnorderedList})
      //   break;
      // case "delete": 
      //   this.setState({formatItalic: !this.state.formatHeader})
      //   break;
      // case "backspace": 
      //   this.setState({formatItalic: !this.state.formatBlockquote})
      //   break;
      // case "secondary-cut": 
      //   this.setState({formatItalic: !this.state.insertOrderedList})
      //   break;
      // case "transpose-characters": 
      //   this.setState({formatItalic: !this.state.insertLink})
      //   break;
      // case "underline": 
      //   this.setState({formatItalic: !this.state.insertImage})
      //   break;
      // case "backspace-word": 
      //   this.setState({formatItalic: !this.state.insertVideo})
      //   break;
      // case "secondary-paste": 
      //   this.setState({formatItalic: !this.state.insertFormula})
      //   break;
      // case "move-selection-to-start-of-block": 
      //   this.setState({formatItalic: !this.state.insertDivider})
      //   break;
      // case "move-selection-to-end-of-block": 
      //   this.setState({formatItalic: !this.state.formatClear})
      //   break;
      default:
    }
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }
  boldClick = () => {
    this.setState({formatBold:!this.state.formatBold})
    this.handleKeyCommand('bold')
  }
  italicClick = () => {
    this.setState({formatItalic:!this.state.formatItalic})
    this.handleKeyCommand('italic')
  }
  headerClick = () => {
    this.setState({formatHeader:!this.state.formatHeader})
    this.handleKeyCommand('header')
  }
  blockquoteClick = () => {
    this.setState({formatBlockquote:!this.state.formatBlockquote})
    this.handleKeyCommand('blockquote')
  }
  codeClick = () => {
    this.setState({formatCode:!this.state.formatCode})
    this.handleKeyCommand('code')
  }
  orderedClick = () => {
    this.setState({orderedList:!this.state.orderedList})
    this.handleKeyCommand('orderedList')
  }
  unorderedClick = () => {
    this.setState({unorderedList:!this.state.unorderedList})
    this.handleKeyCommand('unorderedList')
  }
  insertLink = () => {
    this.setState({insertLink:!this.state.insertLink})
    this.handleKeyCommand('insertLink')
  }
  insertImage = () => {
    this.setState({insertImage:!this.state.insertImage})
    this.handleKeyCommand('italic')
  }
  insertVideo = () => {
    this.setState({insertVideo:!this.state.insertVideo})
    this.handleKeyCommand('italic')
  }
  insertFormula = () => {
    this.setState({insertFormula:!this.state.insertFormula})
    this.handleKeyCommand('insertFormula')
  }
  insertDivider = () => {
    this.setState({insertDivider:!this.state.insertDivider})
    this.handleKeyCommand('insertDivider')
  }
  formatClear = () => {
    this.setState({formatClear:!this.state.formatClear})
    this.handleKeyCommand('formatClear')
  }
  showMore = () => {
  }
  myKeyBindingFn = (e)=>{
    if (e.keyCode === 66 && hasCommandModifier(e)) {
      return 'bold'; // ctrl+B 加粗
    } else if (e.keyCode === 73 && hasCommandModifier(e)) {
      return 'italic';// ctrl+I 斜体
    } else if (e.ctrlKey && e.altKey && e.keyCode === 49) {
      return 'header';// ctrl+alt+1 标题
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 85) {
      return 'blockquote';// ctrl+shift+U 引用块
    } else if (e.ctrlKey && e.altKey && e.keyCode === 67) {
      return 'code'; // ctrl+alt+c 代码块
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 55) {
      return 'orderedList'; // ctrl+shift+7 有序列表
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 56) {
      return 'unorderedList'; // ctrl+shift+8 无序列表
    } else if (e.ctrlKey && e.keyCode === 75) {
      return 'insertLink'; // ctrl+K 插入链接
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 69) {
      return 'insertFormula'; // ctrl+shift+E 插入公式
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 83) {
      return 'insertDivider'; // ctrl+shift+S 插入分隔线
    } else if (e.ctrlKey && e.keyCode === 220) {
      return 'formatClear'; // ctrl+\ 清除格式
    }
    // else if ((e.keyCode === 77 || e.keyCode === 79) && isCtrlKeyCommand(e)) {
    //   return 'split-block'; // M // O 换行
    // } else if (e.keyCode === 68 && isCtrlKeyCommand(e)) {
    //   return 'delete'; // D
    // } else if (e.keyCode === 72 && isCtrlKeyCommand(e)) {
    //   return 'backspace'; // H
    // } else if (e.keyCode === 75 && isCtrlKeyCommand(e)) {
    //   return 'secondary-cut'; // K
    // } else if (e.keyCode === 84 && isCtrlKeyCommand(e)) {
    //   return 'transpose-characters'; // T
    // } 
    else if (e.keyCode === 85 && hasCommandModifier(e)) {
      return 'underline'; // U
    } else if (e.keyCode === 87 && isCtrlKeyCommand(e)) {
      return 'backspace-word'; // W
    }
    return getDefaultKeyBinding(e)
  }
  myBlockStyleFn = (contentBlock) => {
    switch (contentBlock.getType()) {
      case 'header':
        return 'header-one'
      case 'blockquote':
        return 'blockquote'
      case 'LINK':
        return 'LINK'
      default: return null;
    }
  }
  render() {
    const {editorState} = this.state;
    return (
      <div className="richText">
        <div className="toolbar">
          <button onClick={this.boldClick} title="粗体 (Ctrl+B)">
            <svg className={this.state.formatBold ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9 17.025V13h4.418c1.19 0 2.415.562 2.415 2.012s-1.608 2.013-2.9 2.013H9zM9 7h4.336c1 0 1.814.888 1.814 2 0 .89-.814 2-1.814 2H9V7zm8.192 1.899a3.893 3.893 0 0 0-3.888-3.889S9.334 5 8.167 5C7 5 7 6.167 7 6.167v11.666C7 19 8.167 19 8.167 19l5.572.01c2.333 0 4.231-1.86 4.231-4.148a4.122 4.122 0 0 0-1.77-3.372 3.873 3.873 0 0 0 .992-2.591z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.italicClick} title="斜体 (Ctrl+I)">
            <svg className={this.state.formatItalic ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M15.751 5h-5.502a.751.751 0 0 0-.749.75c0 .417.336.75.749.75H12l-2 11H8.249a.751.751 0 0 0-.749.75c0 .417.336.75.749.75h5.502a.751.751 0 0 0 .749-.75.748.748 0 0 0-.749-.75H12l2-11h1.751a.751.751 0 0 0 .749-.75.748.748 0 0 0-.749-.75" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.headerClick} title="标题 (Ctrl+Alt+1)">
            <svg className={this.state.formatHeader ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M7 6.007C7 5.45 7.444 5 8 5c.552 0 1 .45 1 1.007v11.986C9 18.55 8.556 19 8 19c-.552 0-1-.45-1-1.007V6.007zm8 0C15 5.45 15.444 5 16 5c.552 0 1 .45 1 1.007v11.986C17 18.55 16.556 19 16 19c-.552 0-1-.45-1-1.007V6.007zM9 11h6v2H9v-2z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.blockquoteClick} title="引用块 (Ctrl+Shift+U)">
            <svg className={this.state.formatBlockquote ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M17.975 12.209c.504.454.822 1.05.952 1.792.061.35.055.715-.022 1.096-.075.379-.209.718-.4 1.018-.465.73-1.155 1.175-2.07 1.337-.874.153-1.684-.06-2.432-.638a3.6 3.6 0 0 1-.916-1.043 3.92 3.92 0 0 1-.506-1.336c-.172-.98-.03-2.026.425-3.142.455-1.116 1.155-2.118 2.1-3.007.8-.757 1.456-1.182 1.97-1.273a.72.72 0 0 1 .544.104.656.656 0 0 1 .286.452c.054.31-.095.601-.45.877-.856.67-1.455 1.27-1.796 1.798-.323.513-.467.873-.43 1.079.034.196.21.287.524.274l.191-.001.249-.029a2.436 2.436 0 0 1 1.781.642zm-7.51 0c.504.454.821 1.05.951 1.792.062.35.056.715-.02 1.096-.077.379-.21.718-.401 1.018-.465.73-1.155 1.175-2.07 1.337-.874.153-1.684-.06-2.432-.638a3.6 3.6 0 0 1-.916-1.043 3.92 3.92 0 0 1-.506-1.336c-.172-.98-.03-2.026.424-3.142.455-1.116 1.156-2.118 2.101-3.007.8-.757 1.456-1.182 1.97-1.273a.72.72 0 0 1 .544.104.656.656 0 0 1 .285.452c.055.31-.094.601-.45.877-.855.67-1.454 1.27-1.796 1.798-.322.513-.466.873-.43 1.079.034.196.21.287.525.274l.191-.001.248-.029a2.436 2.436 0 0 1 1.782.642z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.codeClick} title="代码块 (Ctrl+Alt+C)">
            <svg className={this.state.formatCode ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M19.718 11.559a.961.961 0 0 1 .007 1.352l-2.201 2.033-1.319 1.219a.937.937 0 0 1-1.33-.005.961.961 0 0 1-.001-1.345l2.813-2.576-2.804-2.568a.96.96 0 0 1-.008-1.352.963.963 0 0 1 1.337 0l2.475 2.289 1.031.953zm-7.462-5.567a1.001 1.001 0 0 1 1.16-.818c.544.096.907.616.81 1.165l-2.082 11.804a1.001 1.001 0 0 1-1.16.818 1.003 1.003 0 0 1-.81-1.165l2.082-11.804zM9.123 8.316a.96.96 0 0 1 0 1.345l-2.812 2.575 2.806 2.569a.962.962 0 0 1 .006 1.35.935.935 0 0 1-1.337 0l-2.093-1.934-1.412-1.305a.961.961 0 0 1-.007-1.352l2.833-2.62.685-.634c.345-.35.976-.354 1.331.006z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.orderedClick} title="有序列表 (Ctrl+Shift+7)">
            <svg className={this.state.orderedList ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9 6.5c0-.552.456-1 .995-1h8.01c.55 0 .995.444.995 1 0 .552-.456 1-.995 1h-8.01A.995.995 0 0 1 9 6.5zM5.884 7.893v-2.09h-.643L5.402 5h1.285v2.893h-.803zm.898 3.83l-.393.395h.862v.733H5v-.482l1.057-.892c.371-.312.461-.434.463-.566.003-.202-.135-.368-.396-.368-.289 0-.418.206-.418.43H5c0-.642.482-1.073 1.125-1.073s1.125.457 1.125.945c0 .307-.106.516-.468.877zM9 11.5c0-.552.456-1 .995-1h8.01c.55 0 .995.444.995 1 0 .552-.456 1-.995 1h-8.01a.995.995 0 0 1-.995-1zm0 5c0-.552.456-1 .995-1h8.01c.55 0 .995.444.995 1 0 .552-.456 1-.995 1h-8.01a.995.995 0 0 1-.995-1zm-1.759.624c0 .14-.025.27-.076.388a.902.902 0 0 1-.217.309 1.017 1.017 0 0 1-.336.205c-.13.05-.275.074-.437.074-.166 0-.32-.027-.462-.08a1.166 1.166 0 0 1-.367-.217 1.062 1.062 0 0 1-.246-.318.914.914 0 0 1-.1-.38v-.055h.765v.054a.343.343 0 0 0 .367.352c.117 0 .207-.03.27-.09.062-.06.093-.152.093-.277 0-.117-.039-.206-.117-.268a.506.506 0 0 0-.32-.091h-.14v-.516h.144c.117 0 .205-.03.264-.09a.31.31 0 0 0 .087-.226.27.27 0 0 0-.087-.209.332.332 0 0 0-.233-.08c-.107 0-.185.027-.236.08a.275.275 0 0 0-.076.197v.055h-.695v-.055a.915.915 0 0 1 .295-.644c.178-.161.436-.242.775-.242.14 0 .27.021.39.064s.224.102.312.176a.802.802 0 0 1 .207.262c.05.1.075.206.075.318 0 .258-.116.46-.348.605v.008a.625.625 0 0 1 .193.119.777.777 0 0 1 .256.572z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.unorderedClick} title="无序列表 (Ctrl+Shift+8)">
            <svg className={this.state.unorderedList ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9 7c0-.552.456-1 .995-1h8.01c.55 0 .995.444.995 1 0 .552-.456 1-.995 1h-8.01A.995.995 0 0 1 9 7zM6 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3-6c0-.552.456-1 .995-1h8.01c.55 0 .995.444.995 1 0 .552-.456 1-.995 1h-8.01A.995.995 0 0 1 9 12zm0 5c0-.552.456-1 .995-1h8.01c.55 0 .995.444.995 1 0 .552-.456 1-.995 1h-8.01A.995.995 0 0 1 9 17z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.insertLink} title="插入链接 (Ctrl+K)">
            <svg className={this.state.insertLink ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.insertImage} title="上传图片">
            <svg className={this.state.insertImage ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M21 17.444C21 18.3 20.1 19 19 19H5c-1.1 0-2-.7-2-1.556V6.556C3 5.7 3.9 5 5 5h14c1.1 0 2 .7 2 1.556v10.888zm-9.437-3.919a.5.5 0 0 1-.862.013l-1.26-2.065a.5.5 0 0 0-.861.012l-2.153 3.767a.5.5 0 0 0 .435.748h10.292a.5.5 0 0 0 .438-.741L14.573 9.78a.5.5 0 0 0-.872-.006l-2.138 3.75z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.insertVideo} title="上传视频">
            <svg className={this.state.insertVideo ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M10.546 15c-.466.273-.86.053-.86-.5V9.505c0-.565.385-.778.86-.501l4.278 2.497c.466.272.475.726 0 1.003L10.546 15zM5 5S3 5 3 7v10s0 2 2.002 2H19c2 0 2-2 2-2V7c0-2-2-2-2-2H5z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.insertFormula} title="插入公式 (Ctrl+Shift+E)">
            <svg className={this.state.insertFormula ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9.033 16.182l3.083-4.133a.885.885 0 0 0 .003-1.12L9.033 6.817h7.985c.606-.03.982-.362.982-.92C18 5.34 17.611 5 17.018 5H6.922a.93.93 0 0 0-.83.509.882.882 0 0 0 .109.946L10 11.5l-3.782 5.037c-.29.289-.246.743-.122.974.172.316.455.489.799.489v-.211l.029.21h10.094c.501 0 .982-.32.982-.909 0-.59-.483-.857-.982-.908H9.033z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.insertDivider} title="插入分隔线 (Ctrl+Shift+S)">
            <svg className={this.state.insertDivider ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M4 7c0-.552.445-1 1-1h14c.552 0 1 .444 1 1 0 .552-.445 1-1 1H5c-.552 0-1-.444-1-1zm0 5a1 1 0 0 1 1.01-1h1.98a1 1 0 1 1 0 2H5.01C4.451 13 4 12.556 4 12zm6 0a1 1 0 0 1 1.01-1h1.98a1 1 0 1 1 0 2h-1.98c-.558 0-1.01-.444-1.01-1zm6 0a1 1 0 0 1 1.01-1h1.98a1 1 0 1 1 0 2h-1.98c-.558 0-1.01-.444-1.01-1zM4 17c0-.552.445-1 1-1h14c.552 0 1 .444 1 1 0 .552-.445 1-1 1H5c-.552 0-1-.444-1-1z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.formatClear} title="清除格式 (Ctrl+\)">
            <svg className={this.state.formatClear ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9.864 12.83l1.641 1.642-1.171 2.874a1.693 1.693 0 0 1-1.585 1.055.782.782 0 0 1-.716-1.077l1.83-4.494zM11.5 8.811L12.24 7H9.69l-2-2h10.672a1 1 0 1 1 0 2h-3.813l-1.406 3.452L11.5 8.811zM5.293 6.845a1 1 0 0 1 1.414 0l10.046 10.046a1 1 0 0 1-1.414 1.414L5.293 8.26a1 1 0 0 1 0-1.415z" fillRule="evenodd"></path></svg>
          </button>
          <button onClick={this.showMore} title="更多" className="more">
            <svg className={this.state.dots ? 'is-actived' : ''} fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fillRule="evenodd"></path></svg>
          </button>
        </div>
        <Editor placeholder="请输入正文" blockRenderMap={blockRenderMap} blockStyleFn={this.myBlockStyleFn} editorState={editorState} handleKeyCommand={this.handleKeyCommand} keyBindingFn={this.myKeyBindingFn} onChange={this.onChange} />
      </div>
    )
  }
}
export default RichText
