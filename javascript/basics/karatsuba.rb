class GradeSchool
  def multiply(a, b)
    result = 0
    carry = [0]
    b.to_s.chars.reverse.each_with_index do |b, index_b|
      a.to_s.chars.reverse.each_with_index do |a, index_a|
        r = simply_multiply(a[index_a].to_i, b[index_b].to_i) + carry.map(&:to_s).join('').to_i
        carry = [0]
        carry = r[0...-1] if r > 10
        tail = r[-1]
        ((b.to_s.length - index_b) + (a.to_s.length - index_a)).times do |n|
          tail << 0
        end
        result += tail
      end
      (result.to_s.length - 1).times { |n| carry << 0 }
      result += carry.map(&:to_s).join('').to_i
      carry = [0]
    end
    result
  end

  def exponent(a, b)
    result = 1
    b.times do |n|
      result = multiply(a, result)
    end
    result
  end

  def simply_multiply(a, b)
    r = 0
    a.to_s.chars.reverse.each do |n|
      r += b
    end
    r
  end

end

class Karatsuba
  def initialize
    @gs = GradeSchool.new
  end

  def multiply(a, b)
    return @gs.multiply(a, b) if a.to_s.length < 10 || b.to_s.length < 10
    m = [a.to_s.length, b.to_s.length].max
    m2 = m / 2

    high1 = a.to_s.chars.first(m2).join('').to_i
    high2 = b.to_s.chars.first(m2).join('').to_i
    low1 = a.to_s.chars[m2..-1].join('').to_i
    low2 = b.to_s.chars[m2..-1].join('').to_i

    z0 = multiply(low1, low2)
    z1 = multiply((low1 + high1), (low2 + high2))
    z2 = multiply(high1, high2)

    return @gs.multiply(z2, @gs.exponent(10, m)) +
      @gs.multiply((z2-z0-z1), @gs.exponent(10, m2)) + (z0)
  end
end

x = 12;
y = 27;

karatsuba = Karatsuba.new
puts karatsuba.multiply(x, y)
