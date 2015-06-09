class Student < ActiveRecord::Base
  has_enumeration_for :status, with: StudentStatusEnum, create_helpers: true      

  has_many :classrooms  

  validates :name, presence: true  
end
