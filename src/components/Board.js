import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {Link, withRouter} from "react-router-dom";


@inject('store', 'routing','countryStore')
export default class Board extends Component {
	constructor(props) {
		super(props);

	}

  componentDidMount() {
    this.props.countryStore.initActiveCodeAsync(865478);
  }

  render() {

		return (
			<div className='page board'>
				<main>
					<h1>Board' area</h1>
          <Link to="./member">
            <button className="btn btn-lg btn-secondary btn-big" type="button" >
              <i class="fas fa-arrow-left">Go Member</i>
            </button>
          </Link>
          <Link to="./">
            <button className="btn btn-lg btn-secondary btn-big" type="button" >
              <i class="fas fa-arrow-left">Go Home</i>
            </button>
          </Link>
				</main>
			</div>
		);
	}
}

