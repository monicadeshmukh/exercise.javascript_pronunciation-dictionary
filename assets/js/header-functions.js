//function testCompute(expectedOutput, numberOfStars) {
//    test(expectedOutput, compute, numberOfStars);
//}

/*********************************************************************************************************************************/
/****************************************************** Part 1 *******************************************************************/
/*********************************************************************************************************************************/
function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

class PronunciationTest {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithSubPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ['D','OW1','N','AH2','T'];
		let input = 'donut';
		_test(expected, input);
	}

	test2() {
		let expected = ['P','R','OW1','G','R','AE2','M'];
		let input = 'program';
		_test(expected, input);
	}


	test3() {
		let expected = ['AH0','K','AO1','R','D'];
		let input = 'accord';
		_test(expected, input);
	}
//}


/*********************************************************************************************************************************/
/****************************************************** Part 2 *******************************************************************/
/*********************************************************************************************************************************/

//Word should define a method named getIdentical()
//returns a list of phonetically identical words.

	test4() {
		let expected = ['D','OW1','N','AH2','T'];
		let input = 'donut';
		_test(expected, input);
	}

	test5() {
		let expected = ['P','R','OW1','G','R','AE2','M'];
		let input = 'program';
		_test(expected, input);
	}


	test6() {
		let expected = ['AH0','K','AO1','R','D'];
		let input = 'accord';
		_test(expected, input);
	}
}

/*********************************************************************************************************************************/
/****************************************************** Part 3 *******************************************************************/
/*********************************************************************************************************************************/

//Word should define a method named getSimilarWordsWithSubPhonemes()
//return a list of words which contain sub-Phonemes

class getSimilarWordsWithSubPhonemes {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithSubPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ["DON'T"];
		let input = 'donut';
		_test(expected, input);
	}

	test2() {
		let expected = ["DRAFT","DRAUGHT","RAFFETY"];
		let input = 'drafty';
		_test(expected, input);
	}


	test3() {
		let expected = ["ALIGN","ALINE","ALLIED","LINED"];
		let input = 'aligned';
		_test(expected, input);
	}
}

/*********************************************************************************************************************************/
/****************************************************** Part 4 *******************************************************************/
/*********************************************************************************************************************************/

//Word should define a method named getSimilarWordsWithAddedPhonemes()
//return a list of near-phonetically-identical words with additional Phonemes added.

class getSimilarWordsWithAddedPhonemes {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithAddedPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ["ACCORD'S", "ACCORDS", "MCCORD", "RECORD"];
		let input = 'accord';
		_test(expected, input);
	}

	test2() {
		let expected = ["DRAFT'S", "DRAFTEE", "DRAFTER", "DRAFTS", "DRAFTY", "DRAUGHTS"];
		let input = 'draft';
		_test(expected, input);
	}


	test3() {
		let expected = ["MALIGNED","UNLINED"];
		let input = 'aligned';
		_test(expected, input);
	}
}

/*********************************************************************************************************************************/
/****************************************************** Part 5 *******************************************************************/
/*********************************************************************************************************************************/

//Word should define a method named getSimilarWordsWithReplacedPhonemes()
//return a list of near-phonetically-identical words with Phonemes replaced.

class GetSimilarWordsWithReplacedPhonemes {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithReplacedPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ["ABOARD","ADORED","AFFORD","AWARD","SCORED"];
		let input = 'accord';
		_test(expected, input);
	}

	test2() {
		let expected = ["CRAFT","DRIFT","GRAFT","KRAFFT","KRAFT"];
		let input = 'draft';
		_test(expected, input);
	}


	test3() {
		let expected = ["AFFINED","ALIGNS","ALINES","ASSIGNED","BLIND"];
		let input = 'aligned';
		_test(expected, input);
	}
}

/*********************************************************************************************************************************/
/****************************************************** Part 6 *******************************************************************/
/*********************************************************************************************************************************/

//Word should define a method named getSimilarWords()
//return a list of all phonetically identical or similar words.

class getSimilarWords {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWords();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ["ACCORD'S", "ACCORDS", "MCCORD", "RECORD"];
		["ABOARD","ADORED","AFFORD","AWARD","SCORED"];
		let input = 'accord';
		_test(expected, input);
	}

	test2() {
		let expected = ["DRAFT'S", "DRAFTEE", "DRAFTER", "DRAFTS", "DRAFTY", "DRAUGHTS"];
		["CRAFT","DRIFT","GRAFT","KRAFFT","KRAFT"]
		let input = 'draft';
		_test(expected, input);
	}


	test3() {
		let expected = [
			"AFFINED","ALIGN","ALIGNS","ALINE",
			"ALINES","ALLIED","ASSIGNED","BLIND",
			"LINED", "MALIGNED","UNLINED"];

		let input = 'aligned';
		_test(expected, input);
	}
}