import React ,{useContext} from 'react';
//import ComponentF from './ComponentF';
import { UserContext, ChannelContext } from '../App';

function ComponentE(){

  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return(
    <div>
      <div>user value via useContext: {user[0]} and {user[1]}</div>
      <div>channel value via useContext: {channel[0]} and {channel[1]}</div>
      {/*<ComponentF/>*/}
    </div>
  )
}

export default ComponentE;
