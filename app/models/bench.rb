class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    benches = Bench.where(lat: bounds["southWest"]["lat"].. bounds["northEast"]["lat"],
                          lng: bounds["southWest"]["lng"].. bounds["northEast"]["lng"])
  end
end
