/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

//Prompt:
function Node(val) {
  this.value = val;
  this.next = null;
}

//Answer:
function addLinkedList(l1, l2) {
	let container = [];
	let sum;
	let answer;

	//create function to traverse each list and store values
	function traverse (list) {
		let num = [];
		let current = list;
		while (current.next) {
			num.push(current.value);
			current = current.next;
		}
		if (!current.next) {
			num.push(current.value);
			num = parseInt(num.reverse().map(function(item){
				return item.toString();
			}).join(''));
			container.push(num);
		}
	}

	//call function on lists
	traverse(l1);
	traverse(l2);

	//add the two stored numbers from the lists together
	sum = container[0] + container[1];
	sum = sum.toString().split('');

	//create push function
	function add(list, val) {
		let current = list;
		while(current.next) current = current.next;
		if (!current.next) current.next = new Node(val);
		}

	//create new linked list made of stored sum of lists
	answer = new Node(parseInt(sum[sum.length-1]));

	for (var i = sum.length-2; i >= 0; i--){
		add(answer, parseInt(sum[i]))
	}
	return answer;
}

/**
PROMPT:
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let container = [];
	for (var i = 0; i < array.length; i++) {
		if (!container[array[i]]) container[array[i]] = array[i];
		else return array[i];
	}
}
