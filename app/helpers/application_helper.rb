module ApplicationHelper
  def will_paginate(collection_or_options = nil, options = {})
    if collection_or_options.is_a? Hash
      options, collection_or_options = collection_or_options, nil
    end
    unless options[:renderer]
      options = options.merge :renderer => WillPaginateAjax::LinkRenderer
    end
    super *[collection_or_options, options].compact
  end  

  def bool(value)
    if value
      "<i class='fa fa-check'></i>".html_safe
    else
      "<i class='glyphicon glyphicon-remove'></i>".html_safe      
    end      
  end  

  def is_application?
    request.user_agent =~ /WebECGAPPL|WebECGDROID/    
  end

  def is_android_application?
    request.user_agent =~ /WebECGDROID/    
  end

  def is_ios_application?
    request.user_agent =~ /WebECGAPPL/    
  end    

  def is_android?
    request.user_agent =~ /Android/
  end

  def is_ios?
    request.user_agent =~ /iPhone|iPad|iPod/    
  end

  def has_search?
    @search
  end      
end
