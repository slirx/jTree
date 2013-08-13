# jTree

Simple tree view

---
### Preview
![Magento Admin Theme](http://i.imgur.com/8sbNsAf.png)

====

## Documentation
using without parameters:
```javascript
$(function() {
  	$("#tree_view").jTree();
});
```
using with parameter - time of hidding:
```javascript
$(function() {
  $("#tree_view").jTree({
    hideTime : 500
  });
});
```

Emmet code for creating html:
```
div#tree_view>(div.literal>div.title+div.list>div.city*4)*4
```
