// dragdrop script for the receiver object (the one that does not move)
// attach to collider that listens for incoming contact
// will lock down if match; match condition identified by tag

#pragma strict

function OnCollisionEnter2D(incomingCollider:Collision2D){
	// triggered when incoming collider makes contact with this object's collider

	if(!Input.GetMouseButton(0)){
		var incomingObject : GameObject = incomingCollider.gameObject;
		var selfCollider : BoxCollider2D = GetComponent(BoxCollider2D); 
		
					
		// lock input object to collider if match
		if(incomingObject.tag == transform.tag){
			// TODO: how to lock irregular colliders? 
			var target_x : float = selfCollider.center.x + transform.position.x;
			var target_y : float = selfCollider.center.y + 0.5*selfCollider.size.y + transform.position.y;
			incomingObject.GetComponent(Transform).position = Vector2(target_x, target_y);	
		}
	}
}

