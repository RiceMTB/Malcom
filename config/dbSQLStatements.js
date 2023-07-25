var Select_Statements = { 
    ALLJOKE: 'SELECT * FROM V_JOKE_PUNCHLINE',
    RANDJOKE: 'SELECT TOP 1 * FROM V_JOKE_PUNCHLINE ORDER BY NEWID()'
}

var SPI_Names = { 
    SPI_JOKE_PUNCHLINE: 'SPI_JOKE_PUNCHLINE'
}

module.exports = {
    Select_Statements: Select_Statements,
    SPI_Names: SPI_Names};