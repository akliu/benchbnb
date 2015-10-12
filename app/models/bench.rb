class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(south, west, north, east)
    benches = Bench.where(lat: south.. north,
                          lng: west.. east)
  end
end
