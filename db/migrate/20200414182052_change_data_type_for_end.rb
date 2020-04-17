class ChangeDataTypeForEnd < ActiveRecord::Migration[5.2]
  def change
    change_column :events, :end_time, :string
  end
end
