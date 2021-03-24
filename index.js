// Code your solution here
function findMatching(collection, name){
    return collection.filter(function(n){
      return n===name||n===name[0].toLowerCase()+name.slice(1);
    })
  };

function fuzzyMatch(collection, name){
    return collection.filter(function(n){
        return n[0]===name[0];
    })
};

function matchName(collection, name){
    return collection.filter(function(n){
        return n.name===name;
    })
}