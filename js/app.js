(function(){

    angular.module('app', [])
        .controller('ctrl', [function() {
            var vn=this;
            // List data and initial item
            vn.listItems = {
                xs: "Ford Mustang",
                sm: "Toyota Land Crauser Prado",
                md: "Mercedes E500",
                lg: "Lincoln TownCar",
                xl: "BMW X5"
            }
            vn.currentItem = vn.listItems.md;


            vn.nlFieldOpen = false;
            vn.nlFieldOpenToggle = function( key ){

                console.log('car');
                console.log(key);
                if ( key ) {
                    vn.currentItem = vn.listItems[key];
                }
                vn.nlFieldOpen = !vn.nlFieldOpen;
            };
        }])

})()


