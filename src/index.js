import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Game from './components/game/Game';
import Table from './components/table/Table';
import RenderingList from './components/react.dev/learn/rendering-lists/RenderingList';
import KeepingComponentsPure from './components/react.dev/learn/keeping-components-pure/KeepingComponentsPure';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<div className="mt-10 pt-10 border-t-2 border-t-pink-500">
			<Game />
		</div>
		<div className="mt-10 pt-10 border-t-2 border-t-pink-500">
			<Table />
		</div>
		<div className="mt-10 pt-10 border-t-2 border-t-pink-500">
			<RenderingList />
		</div>
		<div className="mt-10 pt-10 border-t-2 border-t-pink-500">
			<KeepingComponentsPure />
		</div>
	</React.StrictMode>
);
