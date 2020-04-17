class AddCategoriesToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :category, :integer
  end
end
