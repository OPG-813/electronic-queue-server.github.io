class AdminService {
  constructor( core ) {
    this.core = core;
  }

  async addAdmin( name, userId ) {
    return this.core.db.insert( 'AdminUser', { name, userId }, [ 'name', 'id', 'userId' ] );
  }

  async getAdminByUserId( userId ) {
    const admin = ( await this.core.db.select( 'AdminUser', [], { userId } ) )[ 0 ];
    if ( !admin ) {
      throw new this.core.BadRequestError( 'No admin found' );
    }
    return admin;
  }
}

module.exports = AdminService;
