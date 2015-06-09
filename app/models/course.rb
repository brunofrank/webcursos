class Course < ActiveRecord::Base
  has_enumeration_for :status, with: CourseStatusEnum, create_helpers: true    

  has_many :classrooms

  validates :name, presence: true    
  validates :description, presence: true      
end
