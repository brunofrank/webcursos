//= require utils

modulejs.define('common_search', function () {

  var _selectedId = null;

  return {

    getId: function(){
      return _selectedId;
    },

    create: function(input, dataset, completeCallback, blurCallBack, displayKey, freeWrite){
      var display = 'name';
      if (displayKey)
        display = displayKey;

      $(input).typeahead({
        highlight: true,
        minLength: 3
      }, {
        name: 'Search',
        displayKey: display,
        source: dataset.ttAdapter()
      }).on("typeahead:selected typeahead:autocompleted", function(e, selected) { 
        _selectedId = selected.id;
        try{
          completeCallback(e, selected);
        }catch(e){}
      });

      $(input).on('focusin', function(){
        _selectedId = null;

        if (!freeWrite){
          $(this).val("");
        }
      });

      if (!freeWrite){
        $(input).on('blur', function(){
          if (_selectedId == null || _selectedId == ''){
            $(this).addClass('error');
            $(this).val("");
          } else {
            $(this).removeClass('error')
          }

          try{
            blurCallBack()
          }catch(e){}        
        });
      }

    }
  }
});