const macadddressValidation = (req,res,next) => {
    if (!req.body.macadddress) 
        return res.status(400).json({erro: 'Macadddress é obrigatório'});
    else 
        next();
};

module.exports = macadddressValidation;
