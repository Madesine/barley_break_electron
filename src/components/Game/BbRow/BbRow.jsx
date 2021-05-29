import React from 'react';

import { Grid } from '@material-ui/core';
import BbNode from './BbNode/BbNode';

import './BbRow.css';

let key = 10;
export default function BbRow({ row }) {
  return (
    <Grid item xs={row.length - 1} className="grid__row" >
      {row.map((node) => <BbNode key={key++} value={node} size={row.length} />)}
    </Grid >
  )
}

