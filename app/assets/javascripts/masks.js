//= require jquery.maskMoney
//= require jquery.mask

var Mask = {
  phoneMasks: ['(00) 00000-0000', '(00) 0000-00000'],

  maskBehavior: function (val, e, field, options){
    return val.length > 14 ? Mask.phoneMasks[0] : Mask.phoneMasks[1];
  },

  setMasks: function(){
    $('.currency-with-neg').maskMoney({ symbol: "", decimal: ",", thousands: "", allowZero: true, allowNegative: true });
    $('.currency').maskMoney({ symbol: "", decimal: ",", thousands: "", allowZero: true});
    $('.stock').maskMoney({ symbol: "", decimal: ",", thousands: "", allowZero: true, precision: 3});    
    $('.stock-neg').maskMoney({ symbol: "", decimal: ",", thousands: "", allowZero: true, precision: 3, allowNegative: true});        
    $('.total-money').maskMoney({ symbol: "", decimal: ".", thousands: "", allowZero: true });    
    $('.integer').mask('000000000000000');
    $('.cep').mask('#####-###');    
    $('.telefone').mask(Mask.maskBehavior, {onKeyPress: 
      function(val, e, field, options) {
        field.mask(maskBehavior(val, e, field, options), options);
      }
    });
    $('.date').mask('##/##/####');
    $('.time').mask('##:##');
    $('.cpf').mask('###.###.###-##');            
    $('.cnpj').mask('##.###.###/####-##');                
    $('.money').maskMoney({ prefix: "R$ ", decimal: ",", thousands: "", allowZero: true });
  }
}

$(Mask.setMasks);
$(document).on('page:load', Mask.setMasks);