# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :classroom do
    student nil
    course nil
    entry_at "2015-06-09 08:15:55"
  end
end
