class ChangeDataTypeForStart < ActiveRecord::Migration[5.2]
  def change
    change_column :events, :start_time, :string
  end
end
