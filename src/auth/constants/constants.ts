export class JwtConstants {
    static readonly jwtSecret = process.env.JWT_SECRET || 'DELEITEAPP_SECRET';
    static readonly jwtExpire = process.env.JWT_EXPIRE || '1h';
}
