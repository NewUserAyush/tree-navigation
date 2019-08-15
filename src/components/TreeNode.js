import React from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import last from 'lodash/last';
import PropTypes from 'prop-types';
import {StyledTreeNode,NodeIcon} from './_treeStyle';

const getNodeLabel = (node) => last(node.path.split('/'));

const TreeNode = (props) => {
  const { node, getChildNodes, level, onToggle } = props;

  return (
    <React.Fragment>
      <StyledTreeNode level={level} type={node.type} onClick={() => onToggle(node)} data-path={node.path}>
        <NodeIcon >
          { node.type === 'folder' && (node.isOpen ? <FaChevronDown /> : <FaChevronRight />) }
        </NodeIcon>
        
        <NodeIcon marginRight={10}>
          { node.type === 'file' && <FaFile /> }
          { node.type === 'folder' && node.isOpen === true && <FaFolderOpen /> }
          { node.type === 'folder' && !node.isOpen && <FaFolder /> }
        </NodeIcon>
        
        <span role="button" >
          { getNodeLabel(node) }
        </span>
      </StyledTreeNode>

      { node.isOpen && getChildNodes(node).map(childNode => (
        <TreeNode 
          {...props}
          node={childNode}          
          level={level + 1}
        />
      ))}
    </React.Fragment>
  );
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getChildNodes: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onNodeSelect: PropTypes.func.isRequired,
};

TreeNode.defaultProps = {
  level: 0,
};

export default TreeNode;
