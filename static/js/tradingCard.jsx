'use strict';

const tradingCardData = [
	{
		name: 'Balloonicorn',
		skill: 'video games',
		imgUrl: '/static/img/balloonicorn.jpg',
		cardId: 1,
	},
	{
		name: 'Float',
		skill: 'baking pretzels',
		imgUrl: '/static/img/float.jpg',
		cardId: 2,
	},
	{
		name: 'Llambda',
		skill: 'knitting scarves',
		imgUrl: '/static/img/llambda.jpg',
		cardId: 3,
	},
	{
		name: 'Merge',
		skill: 'fast reader',
		imgUrl: '/static/img/merge.png',
		cardId: 4,
	},
	{
		name: 'Off-By-One',
		skill: 'Really bad at guessing',
		imgUrl: '/static/img/off-by-one.jpeg',
		cardId: 5
	},
	{
		name: "Seed.py",
		skill: "making curry dishes",
		imgUrl: "/static/img/seedpy.jpeg",
		cardId: 6,
	},
	{
		name: "Polymorphism",
		skill: "costumes",
		imgUrl: "/static/img/polymorphism.jpeg",
		cardId: 7,
	},
	{
		name: "Short Stack Overflow",
		skill: "ocean animal trivia",
		imgUrl: "/static/img/shortstack-overflow.jpeg",
		cardId: 8,
	},
];

function TradingCard(props) {
	return (
		<div className="card">
			<h2>Name: {props.name}</h2>
			<img src={props.imgUrl} alt="profile" />
			<h2>Skill: <br></br>{props.skill}</h2>
		</div>
	);
}

function TradingCardContainer(props) {
	let cardArray = []
	for (const currentCard of tradingCardData) {
		cardArray.push(<TradingCard name={currentCard.name}
			skill={currentCard.skill}
			imgUrl={currentCard.imgUrl}
			key={currentCard.cardId} />);
	}
	return (
		<React.Fragment>
			{cardArray}
		</React.Fragment>);
}

ReactDOM.render(
	<TradingCardContainer />,
	document.querySelector('#cardContainer')
)

// for (const currentCard of tradingCardData) {
//     ReactDOM.render(
//         <TradingCard name={currentCard.name} skill={currentCard.skill} imgUrl={currentCard.imgUrl} />,
//         document.querySelector(currentCard.id)
//     )
// }


// ReactDOM.render(
//     <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//     document.querySelector('#balloonicorn'),
// );

// ReactDOM.render(
//     <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//     document.querySelector('#float'),
// );

// ReactDOM.render(
//     <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
//     document.querySelector('#llambda'),
// );
