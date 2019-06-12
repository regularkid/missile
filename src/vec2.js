class Vec2
{
    constructor(x, y) { this.Set(x, y); }
    Set(x, y) { this.x = x || 0.0; this.y = y || 0.0; }
    LengthSq() { return this.x*this.x + this.y*this.y; }
    Length() { return Math.sqrt(this.LengthSq()); }
    Dot(v) { return (this.x*v.x + this.y*v.y); }
    
    // Return a new vector
    Copy() { let v = new Vec3(this.x, this.y); return v; }
    Add(v) { return new Vec3(this.x + v.x, this.y + v.y); }
    Sub(v) { return new Vec3(this.x - v.x, this.y - v.y); }
    Scale(s) { return new Vec3(this.x * s, this.y * s); }
    Multiply(v) { return new Vec3(this.x * v.x, this.y * v.y); }
    Invert(v) { return new Vec3(-this.x, -this.y); }
    Normalize()
    {
        let k = 1.0 / this.Length();
        return new Vec3(this.x * k, this.y * k);
    }
    Lerp(v, t)
    {
        let tInv = 1.0 - t;
        return new Vec3(this.x*tInv + v.x*t, this.y*tInv + v.y*t);
    }

    // Modify this vector
    AddToSelf(v) { this.x += v.x; this.y += v.y; }
    SubFromSelf(v) { this.x -= v.x; this.y -= v.y; }
    ScaleSelf(s) { this.x *= s; this.y *= s; }
    MultiplySelf(v) { this.x *= v.x; this.y *= v.y; }
    InvertSelf() { this.x = -this.x; this.y = -this.y; }
    NormalizeSelf()
    {
        let len = this.Length();
        let k = 1.0 / len;
        this.x *= k; this.y *= k;
        return len;
    }
}