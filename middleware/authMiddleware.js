export const authMiddleware = (req,res,next) => {
    const login = true
    if (login) {
        next();
    } else { 
        res.status(401).json({error: "No Autorizado"});
    }
}

export const isAdmin = (req,res,next) => {
    const login = true
    if (login) {
        next();
    } else { 
        res.status(401).json({error: "No Autorizado"});
    }
}

export const isUser = (req,res,next) => {
    const login = true
    if (login) {
        next();
    } else { 
        res.status(401).json({error: "No Autorizado"});
    }
}