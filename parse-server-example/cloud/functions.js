Parse.Cloud.define('hello', req => {
  req.log.info(req);
  return 'Hi';
});

Parse.Cloud.define('asyncFunction', async req => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  req.log.info(req);
  return 'Hi async';
});

Parse.Cloud.define('landmark', async req => {
  req.log.info(req);
  try{

    const query = new Parse.Query("Landmark");
    const result = await query.get(req.params.id);
    
    return result;

  }catch(e){
    throw new Parse.Error(500, e.message)
  }
},{
  fields: ['id']
});

Parse.Cloud.define('landmarks', async req => {
  req.log.info(req);

  try{
  
    const query = new Parse.Query("Landmark");
    query.ascending("order");
    query.select("title", "objectId", "photo_thumb", "short_info", "photo", "order");
    
    const results = await query.find();
    
    return results;

  }catch(e){
    throw new Parse.Error(500, e.message)
  }
});

Parse.Cloud.define('search', async req => {
  req.log.info(req);

  try{
  
    const query = new Parse.Query('Landmark');
    query.matches('title', req.params.title, 'i')
    query.select("title", "objectId", "photo_thumb", "short_info", "photo");
    query.ascending('order');
    
    const results = await query.find()
    
    return results;

  }catch(e){
    throw new Parse.Error(500, e.message)
  }
 
},{
  fields: ['title']
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});
