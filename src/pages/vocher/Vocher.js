import React from 'react';
import VocherTable from '../../componant/VocerTable/VocherTable';
import { Button } from 'react-bootstrap';
import './Vocher.css';

function Vocher() {
  return (
    <div className="layout">
      <div className="datainput">
        input form
        <input className="input-size form-control" type="text" placeholder="" />
        <br />
        <butoon className="btn btn-danger">test </butoon>
      </div>{' '}
      <div className="vochertable">
        <VocherTable />
      </div>{' '}
      <div className="totals"> totals </div>{' '}
    </div>
  );
}

export default Vocher;
