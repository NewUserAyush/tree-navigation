import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FileExplorer from './components/FileExplorer';
const data=require('./data.json');
import { render } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders File Expo without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FileExplorer data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('On Click of folder show breadcrumbs', () => {
  
//   const div = document.createElement('div');
//   let element=render(<FileExplorer data={data}/>);
//   const {getByText}=element.getByRole('button').firstChild;
//   expect(getByText('label0')).toBeInTheDocument();
 
//   //element.querySelector('span[role="button"]').click();
//   ReactDOM.unmountComponentAtNode(div);
// });