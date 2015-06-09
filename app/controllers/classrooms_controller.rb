class ClassroomsController < ApplicationController
  def index
    @classrooms = Classroom.all.paginate(:page => params[:page])
  end

  def new
    @classroom = Classroom.new    
  end

  def create
    @classroom = Classroom.new(classroom_params)        

    if @classroom.save
      redirect_to classrooms_path, notice: 'Matricula efetuada com sucesso'
    else
      render :new
    end
  end

  private

    def classroom_params
      params.require(:classroom).permit(:student_id, :course_id, :entry_at)      
    end
end
