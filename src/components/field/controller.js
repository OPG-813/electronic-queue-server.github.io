const FieldService = require( './service' );

class FieldController {
  constructor( core ) {
    this.core = core;
    this.service = new FieldService( core );
  }

  create( data ) {
    return this.purposeService.add( data );
  }
  
  get( data ) {
    return this.service.get( data.id );
  }

  list( data ) {
    return this.service.list( data.filters, data.pages );
  }
  
  remove( data ) {
    return this.service.remove( data.id );
  }

  update( data ) {
    return this.service.update( data.id, data.updates );
  }
}

module.exports = FieldController;