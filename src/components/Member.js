import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {Link, withRouter} from "react-router-dom";

@observer
export default class Member extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const store = this.store;
		return (
			<div className='page member'>
				<main>
					<h1>Members' area</h1>
          <Link to="./board">
            <button className="btn btn-lg btn-secondary btn-big" type="button" >
              <i class="fas fa-arrow-left">Go Board</i>
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
