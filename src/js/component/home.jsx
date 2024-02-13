import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

//include images into your bundle


//create your first component

const Card = (props) => {
	return (
		<div className="card p-3 mx-1">
			<div className="card-body">
				<h1 className="fs-5">{props.icon ? <FontAwesomeIcon icon={faClock} /> : props.number}</h1>
			</div>
		</div>
	)
}

const Home = (props) => {
	return (
		<div className="d-flex justify-content-center">
			<div className="d-flex">
				<Card icon />
				<Card number={Math.floor((props.count % 10000000) / 1000000)} />
				<Card number={Math.floor((props.count % 1000000) / 100000)} />
				<Card number={Math.floor((props.count % 100000) / 10000)} />
				<Card number={Math.floor((props.count % 10000) / 1000)} />
				<Card number={Math.floor((props.count % 1000) / 100)} />
				<Card number={Math.floor((props.count % 100) / 10)} />
				<Card number={props.count % 10} />
			</div>
		</div>
	);
};

export default Home;
