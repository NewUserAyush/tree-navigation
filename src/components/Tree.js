import React, { Component } from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';
import { List } from "react-virtualized";

export default class Tree extends Component {

  state = {
    nodes: this.props.data,
    listHeight :600,
    rowHeight :1200,
    rowWidth :800,
  };

  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes = (node) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  }  

  onToggle = (node) => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  }
  
  render() {
    const rootNodes = this.getRootNodes();
    const customeItem = ({ index, style }) => (
      <TreeNode 
        key={`label-${index}`}
        node={rootNodes[index]}
        getChildNodes={this.getChildNodes}
        onToggle={this.onToggle}
        overscanRowCount={10} 
      />
    );
    return (
      <div>
        {<List className="List"
            width={this.state.rowWidth}
            height={this.state.listHeight}
            rowHeight={this.state.rowHeight}
            rowRenderer={customeItem}
            rowCount={rootNodes.length} />
        }
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired,
};