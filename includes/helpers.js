const distribuidoraMap = {
    'COMPANHIA DE ELETRICIDADE DO ESTADO DA BAHIA COELBA': 'Coelba',
    'COMPANHIA ENERGETICA DE PERNAMBUCO': 'Celpe',
    'COMPANHIA ENERGÉTICA DE PERNAMBUCO': 'Celpe',
    'COMPANHIA ENERGÉTICA DO RIO GRANDE DO NORTE COSERN': 'Cosern',
    'ELEKTRO REDES S.A.': 'Elektro',
    'NEOENERGIA DISTRIBUICAO BRASILIA S.A.': 'Brasilia',
    'NEOENERGIA DISTRIBUI�ÃO BRASÍLIA S.A.': 'Brasilia',
};


function normalizaNomeDistribuidora(dist) {
    return distribuidoraMap[dist] || dist;
}

module.exports = { normalizaNomeDistribuidora };
