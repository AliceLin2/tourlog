style = Style.create([{ key: 'cultural history', 
                        text: 'cultural history', 
                        value: 'cultural history', 
                        feature: 'historical, quaint'}, 
                     { key: 'snow scene', 
                        text: 'snow scene', 
                        value: 'snow scene', 
                        feature: 'pure, romantic, remind of Christmas'},
                     { key: 'starry sky', 
                        text: 'starry sky', 
                        value: 'starry sky', 
                        feature: 'blinking stars, quiet and peaceful'},
                     { key: 'sea of flowers', 
                        text: 'sea of flowers', 
                        value: 'sea of flowers', 
                        feature: 'floral, colorful' },
                     { key: 'mountain', 
                        text: 'mountain', 
                        value: 'mountain', 
                        feature: 'the beauty of the landscape, splendid'},
                     { key: 'aurora', 
                        text: 'aurora', 
                        value: 'aurora', 
                        feature: 'grand, spectacular'},
                     { key: 'beach', 
                        text: 'beach', 
                        value: 'beach', 
                        feature: 'relaxed, beautiful' },
                     { key: 'prairies', 
                        text: 'prairies', 
                        value: 'prairies', 
                        feature: 'vast, extensive'}
                    ])

season = Season.create([{ key: 'January',
                           text: 'January',
                           value: 'January'}, 
                        { key: 'February',
                           text: 'February',
                           value: 'February'},
                        { key: 'March',
                           text: 'March',
                           value: 'March' },
                        { key: 'April',
                           text: 'April',
                           value: 'April' },
                        { key: 'May',
                           text: 'May',
                           value: 'May'},
                        { key: 'June',
                           text: 'June',
                           value: 'June'},
                        { key: 'July',
                           text: 'July',
                           value: 'July' },
                        { key: 'August',
                           text: 'August',
                           value: 'August'},
                        { key: 'September',
                           text: 'September',
                           value: 'September'},
                        { key: 'October',
                           text: 'October',
                           value: 'October'},
                        { key: 'November',
                           text: 'November',
                           value: 'November'},
                        { key: 'December',
                           text: 'December',
                           value: 'December' }
                        ])

city1 = City.create({ name: 'Hepburn', country: 'Iceland', area: 'Europe'})
seasoncity11 = SeasonCity.create({ city_id: 1, season_id: 1})
seasoncity12 = SeasonCity.create({ city_id: 1, season_id: 12})
stylecity11 = StyleCity.create({ city_id: 1, style_id: 6})
stylecity12 = StyleCity.create({ city_id: 1, style_id: 2})

city2 = City.create({ name: 'Bei Jing', country: 'China', area: 'Asia'})
seasoncity21 = SeasonCity.create({ city_id: 2, season_id: 4})
seasoncity22 = SeasonCity.create({ city_id: 2, season_id: 9})
stylecity2 = StyleCity.create({ city_id: 2, style_id: 1})

city3 = City.create({ name: 'Uygur', country: 'China', area: 'Asia'})
seasoncity3 = SeasonCity.create({ city_id: 3, season_id: 6})
stylecity3 = StyleCity.create({ city_id: 3, style_id: 8})

city4 = City.create({ name: 'Qing Hai', country: 'China', area: 'Asia'})
seasoncity41 = SeasonCity.create({ city_id: 4, season_id: 3})
seasoncity42 = SeasonCity.create({ city_id: 4, season_id: 10})
stylecity41 = StyleCity.create({ city_id: 4, style_id: 8})
stylecity42 = StyleCity.create({ city_id: 4, style_id: 4})

city5 = City.create({ name: 'San Ya', country: 'China', area: 'Asia'})
seasoncity51 = SeasonCity.create({ city_id: 5, season_id: 5})
seasoncity52 = SeasonCity.create({ city_id: 5, season_id: 10})
stylecity5 = StyleCity.create({ city_id: 5, style_id: 7})

city6 = City.create({ name: 'Hawaii', country: 'United States', area: 'North America'})
seasoncity6 = SeasonCity.create({ city_id: 6, season_id: 10})
stylecity6 = StyleCity.create({ city_id: 6, style_id: 7})

city7 = City.create({ name: 'Kun Ming', country: 'China', area: 'Asia'})
seasoncity7 = SeasonCity.create({ city_id: 7, season_id: 3})
stylecity7 = StyleCity.create({ city_id: 7, style_id: 4})

city8 = City.create({ name: 'Osaka', country: 'Japan', area: 'Asia'})
seasoncity81 = SeasonCity.create({ city_id: 8, season_id: 3})
seasoncity82 = SeasonCity.create({ city_id: 8, season_id: 4})
stylecity81 = StyleCity.create({ city_id: 8, style_id: 4})
stylecity82 = StyleCity.create({ city_id: 8, style_id: 1})

city9 = City.create({ name: 'Da Li', country: 'China', area: 'Asia'})
seasoncity9 = SeasonCity.create({ city_id: 9, season_id: 2})
stylecity9 = StyleCity.create({ city_id: 9, style_id: 4})

city10 = City.create({ name: 'Huang Shan', country: 'China', area: 'Asia'})
seasoncity10 = SeasonCity.create({ city_id: 10, season_id: 8})
stylecity10 = StyleCity.create({ city_id: 10, style_id: 5})

city11 = City.create({ name: 'Chang Bai Shan', country: 'China', area: 'Asia'})
seasoncity111 = SeasonCity.create({ city_id: 11, season_id: 12})
seasoncity112 = SeasonCity.create({ city_id: 11, season_id: 1})
stylecity111 = StyleCity.create({ city_id: 11, style_id: 2})
stylecity112 = StyleCity.create({ city_id: 11, style_id: 5})

city12 = City.create({ name: 'Lauterbrunnen', country: 'Switzerland', area: 'Europe'})
seasoncity121 = SeasonCity.create({ city_id: 12, season_id: 11})
stylecity121 = StyleCity.create({ city_id: 12, style_id: 2})
stylecity122 = StyleCity.create({ city_id: 12, style_id: 5})

city13 = City.create({ name: 'Mo He', country: 'China', area: 'Asia'})
seasoncity131 = SeasonCity.create({ city_id: 13, season_id: 7})
stylecity131 = StyleCity.create({ city_id: 13, style_id: 3})

city14 = City.create({ name: 'Paris', country: 'France', area: 'Europe'})
seasoncity141 = SeasonCity.create({ city_id: 14, season_id: 11})
seasoncity141 = SeasonCity.create({ city_id: 14, season_id: 10})
stylecity141 = StyleCity.create({ city_id: 14, style_id: 1})

city15 = City.create({ name: 'Santiago', country: 'Chile', area: 'South America'})
seasoncity151 = SeasonCity.create({ city_id: 15, season_id: 8})
stylecity151 = StyleCity.create({ city_id: 15, style_id: 3})

city16 = City.create({ name: 'Xi Zang', country: 'China', area: 'Asia'})
seasoncity161 = SeasonCity.create({ city_id: 16, season_id: 9})
stylecity161 = StyleCity.create({ city_id: 16, style_id: 5})

city17 = City.create({ name: 'Tekapo', country: 'New Zealand', area: 'Australian'})
seasoncity171 = SeasonCity.create({ city_id: 17, season_id: 6})
stylecity171 = StyleCity.create({ city_id: 17, style_id: 3})

city18 = City.create({ name: 'Sydney', country: 'Australia', area: 'Australian'})
seasoncity181 = SeasonCity.create({ city_id: 18, season_id: 1})
stylecity181 = StyleCity.create({ city_id: 18, style_id: 1})

city19 = City.create({ name: 'Tokyo', country: 'Japan', area: 'Asia'})
seasoncity191 = SeasonCity.create({ city_id: 19, season_id: 3})
stylecity191 = StyleCity.create({ city_id: 19, style_id: 1})

city20 = City.create({ name: 'Rome', country: 'Italy', area: 'Europe'})
seasoncity201 = SeasonCity.create({ city_id: 20, season_id: 2})
stylecity201 = StyleCity.create({ city_id: 20, style_id: 1})

city21 = City.create({ name: 'New York', country: 'United States', area: 'North America'})
seasoncity211 = SeasonCity.create({ city_id: 21, season_id: 7})
stylecity211 = StyleCity.create({ city_id: 21, style_id: 1})

city22 = City.create({ name: 'Zhang Jia Jie', country: 'China', area: 'Asia'})
seasoncity221= SeasonCity.create({ city_id: 22, season_id: 5})
stylecity221 = StyleCity.create({ city_id: 22, style_id: 5})