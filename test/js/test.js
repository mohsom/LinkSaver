/**
 * Created by mohsom on 14.11.2014.
 */
test("Application object",function(){
    notEqual(app,"undefined","App is defined");
});
test("Models",function(){
    notEqual(app.LinkModel,"undefined","Model is defined");
});
test("Collections",function(){
    notEqual(app.links,"undefined","Collection is defined");
});
test("Views",function(){
    notEqual(app.LinkView,"undefined","Link view is defined");
    notEqual(app.ColView,"undefined","Collection view defined");
});
