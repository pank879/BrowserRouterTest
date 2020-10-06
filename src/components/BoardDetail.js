import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {Link, withRouter} from "react-router-dom";

@observer
export default class Board extends Component {
	constructor(props) {
		super(props);

	}

	render() {
    console.log('----->'+this.props.location.pathname);
    console.log('----->'+this.props.match.params.value);
		return (
			<div className='page board'>
				<main>
					<h1>Board Detail area</h1>
          <Link to="../member">
            <button className="btn btn-lg btn-secondary btn-big" type="button" >
              <i class="fas fa-arrow-left">Go Member</i>
            </button>
          </Link>
          <Link to="../board">
            <button className="btn btn-lg btn-secondary btn-big" type="button" >
              <i class="fas fa-arrow-left">Go Board</i>
            </button>
          </Link>
          <Link to="../">
            <button className="btn btn-lg btn-secondary btn-big" type="button" >
              <i class="fas fa-arrow-left">Go Home</i>
            </button>
          </Link>
				</main>
			</div>
		);
	}
}
