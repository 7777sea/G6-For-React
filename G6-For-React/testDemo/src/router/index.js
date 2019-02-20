import React from 'react';
import ChartsDemo from './demo1';

class Routers extends React.Component{
    render(){
        return <div className='root' style={{height:900}}>
            <ChartsDemo/>
        </div>;
    }
}
export default Routers;

