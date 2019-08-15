import styled from 'styled-components';

const StyledFileExplorer = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
`;

const TreeWrapper = styled.div`
  width: 250px;
`;

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 8px;
  cursor:pointer;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
  transition: all 0.01s;
  &:hover {
    background: lightgray;
  }
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const getPaddingLeft = (level, type) => {
    let paddingLeft = level * 20;
    if (type === 'file') paddingLeft += 20;
    return paddingLeft;
  }


export {StyledFileExplorer,TreeWrapper,StyledTreeNode,NodeIcon}