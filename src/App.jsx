import { useState } from 'react';
import Questions from './Questions';
import data from './data';

function App() {
	const [questions, setQuestions] = useState(data);

	return (
		<main>
			<Questions questions={questions} />
		</main>
	);
}

export default App;
