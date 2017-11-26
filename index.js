const positions = {
  developer: 1,
  techLead: 2,
  headOfIt: 4,
  managingDirector: 8
}

const isAccessGranted = (permissions, requiredPositionName, requiredPosition) => {
  
  if((permissions & requiredPosition) !== requiredPosition ) {
    console.log('Access Denied');
    return;
  }
  
  console.log('Access Granted');
}

class Permissions {
  constructor(position) {
    // Get the numerical value of the passed in poistion
    this.requiredPosition = positions[position];
    
    // Get binary representation depending on what position is passed in
    switch (this.requiredPosition) {
      case positions.managingDirector:
        this.permissions = positions.developer | positions.techLead | positions.headOfIt | 
            positions.managingDirector;
        break;
      case positions.headOfIt:
        this.permissions = positions.developer | positions.techLead | positions.headOfIt;
        break;
      case positions.techLead:
        this.permissions = positions.developer | positions.techLead
        break;
      case positions.developer:
          this.permissions = positions.developer;
          break;
      default:
        break;
    }
    
  }
  
  developer() {
    isAccessGranted(this.permissions, 'developer', positions.developer);
  }
  
  techLead() {
    isAccessGranted(this.permissions, 'techLead', positions.techLead);
  }
  
  headOfIt() {
    isAccessGranted(this.permissions, 'headOfIt', positions.headOfIt);
  }
  
  managingDirector() {
    isAccessGranted(this.permissions, 'managingDirector', positions.managingDirector);
  }
}

const headOfIt = new Permissions('headOfIt');

headOfIt.developer();
headOfIt.managingDirector();