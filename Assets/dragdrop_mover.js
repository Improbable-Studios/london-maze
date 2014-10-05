// script attached to the moving piece in dragdrop
// the gameobject must have a rigidbody2D and collider2D component

private var cam;
private var canMove;

private var myRigidBody2D;
private var myTransform;
private var myCollider2D;

function Start () {
	cam = Camera.main;
	canMove = false;
	myRigidBody2D = GetComponent(Rigidbody2D);
	myTransform = GetComponent(Transform);
	myCollider2D = GetComponent(BoxCollider2D);
	Debug.Log(canMove);
}

function FixedUpdate () {	
	if (!canMove) return;
	
	var mousePos = Input.mousePosition;
	var move = cam.ScreenToWorldPoint(Vector3(mousePos.x,mousePos.y,1)) - myTransform.position;
	
	myRigidBody2D.transform.Translate(move);
}

function OnMouseDown (){
	canMove = true;
}

function OnMouseUp () {
	canMove = false;
}