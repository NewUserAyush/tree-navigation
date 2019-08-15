import React, { Component } from 'react';
import Tree from './Tree';
import {StyledFileExplorer,TreeWrapper} from './_treeStyle';


export default class FileExplorer extends Component { 
  state = {
    selectedFile: null,
    data:this.props.data
  };

  onSelect = (file) => this.setState({ selectedFile: file });

  // Using Event delegation trying to reduce number of event handler 
  findPath=(e)=>{
    let node=e.target.dataset;
    if(!node.path && e.target.querySelector('span')){
      node=e.target.querySelector('span').dataset;
    }else if(!node.path && !e.target.querySelector('span') && e.target.parentElement.dataset.path){
      node=e.target.parentElement.dataset;
    }else if(!node.path && !e.target.querySelector('span') && e.target.parentElement.parentElement.dataset.path){
      node=e.target.parentElement.parentElement.dataset;
    }else if(!node.path && !e.target.querySelector('span') && e.target.parentElement.parentElement.parentElement.dataset.path){
      node=e.target.parentElement.parentElement.parentElement.dataset;
    }
      this.setState({selectedFile:node.path})
  }

  expandPath(event){
    if (event.key === "Enter") {
      console.log("heelo")
      let path=event.currentTarget.value;
      let arr=path.split('/').filter(Boolean);
      let temp='/';
      let dataArr=this.state.data;
      for(let i=0;i<arr.length;i++){
        temp+=arr[i]
        dataArr[temp].isOpen=true;
        temp+=(i!==arr.length-1?'/':'');
      }
      this.setState({data:dataArr});
    }
  }

  render() {
    const { selectedFile } = this.state;

    return (
      <StyledFileExplorer onClick={this.findPath}>
        {/* <div className="breadcrumbs">
          { selectedFile }
        </div> */}
        <input className="breadcrumbs-input" type="text" value={selectedFile} onKeyUp={this.expandPath.bind(this)}/>
      
        <TreeWrapper>
          <Tree onSelect={this.onSelect} data={this.state.data} />
        </TreeWrapper>
        
      </StyledFileExplorer>
    )
  }
}