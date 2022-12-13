

	// Javascript code to Find minimum
	// in Binary Tree
	
	let root;
	
	class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
		}
	}

	// Returns the min value in a binary tree
	function findMin(node)
	{
		if (node == null)
			return 2147483647;

		var res = node.data;
		var lres = findMin(node.left);
		var rres = findMin(node.right);

		if (lres < res)
			res = lres;
		if (rres < res)
			res = rres;
		return res;
	}
	
	root = new Node(2);
	root.left = new Node(7);
	root.right = new Node(5);
	root.left.right = new Node(6);
	root.left.right.left = new Node(1);
	root.left.right.right = new Node(11);
	root.right.right = new Node(9);
	root.right.right.left = new Node(4);

	// Function call
	console.log("Minimum element is "
					+ findMin(root));
	

