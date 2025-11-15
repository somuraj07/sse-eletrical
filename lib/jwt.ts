import jwt, { JwtPayload } from "jsonwebtoken"

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "SOMU_Kalyanakr"

export function signToken(payload: object) {
    return jwt.sign(payload, NEXTAUTH_SECRET, { expiresIn: "1h" })
  }
  
  export function verifyToken(token: string) {
    try {
      return jwt.verify(token, NEXTAUTH_SECRET) as JwtPayload
    } catch {
      return null
    }
  }