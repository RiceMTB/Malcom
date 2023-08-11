const Select_Statements = { 
    ALLJOKE: 'SELECT * FROM V_JOKE_PUNCHLINE',
    RANDJOKE: 'SELECT TOP 1 * FROM V_JOKE_PUNCHLINE ORDER BY NEWID()'
}

const SPI_Names = { 
    SPI_JOKE_PUNCHLINE: 'SPI_JOKE_PUNCHLINE',
    SPI_LOG_LINE: 'SPI_MALCOM_LOG'
}

const SP_Names = {
    SP_JOKE_BY_ID: 'SP_JOKE_BY_ID'
}

const SPD_Names = { 
    SPD_JOKE: 'SPD_JOKE'
} 

module.exports = {
    Select_Statements: Select_Statements,
    SPI_Names: SPI_Names,
    SP_Names: SP_Names,
    SPD_Names: SPD_Names
    };