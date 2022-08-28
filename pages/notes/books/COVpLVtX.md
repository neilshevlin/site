---
title: Introduction to mineral exploration
description: The book 'introduction to mineral exploration' by Charles J Moon
---

{% section .hero %}
# Introduction to mineral exploration - Charles J Moon
This was one of the first books about mineral exploration that I had read. It's content is slightly dated. But because the mineral exploration industry moves in decades the contnet is still extremely relevant. Has a decent degree of technical sophistication for a beginnner to get in to. Best serves as a starting point for more advanced topics. I mainly read chapters about the economics of mineral deposits, reconnaissance, geochemical and geophysical exploration. The book contains a few case studies which are interesting, but I overlooked them. I have revisited some of the case studies in later dates. But I would approach this book with the intention of a broad overview and finding a book for each chapter to further expand and deepen your knowledge.

## Spatial data models
There are two main ways of representing spatial data

- Raster
- Vector

Vector is based off of eucidean geometry. A map is composed down in to x, y, z coords

Raster is where a map is composed down in to blocks - think minecraft. 

Some more complex models can be established where the details of the map are mapped with polygons. 

As things become more complex, you need to have some way of establishing the relationship of the polygons in a model. → This is known as a **topological map.** 

This can be used to make triangular irregular networks and digital terrain models. 

### **Storage methods**

In a very basic way, data can be stored in csv files in excel. Data points are knows as tuples in this form. 

However **relational databases** are a far more superior way to store data in exploration. 

There are ways to convert flat files to relational DB's. called **normalisation.**

Relational DB's break the data down in to smaller tables with some relations to another table. 

Relational DB's were/are very good for 2D models of exploration data. 

However 3D models were (At the time of writing) very complex to do. 

**Object oriented databases** were used instead. 

Using databases as a store of truth is very important. For statistics and legal reasons. 

Each company will usually have it's own data collection procedure. 

There are then usually some internal tools to make sure that the data fits within some range that the geologist is aware  of. (all holes are between 0-100 etc)

Documentation is often very important. It provides information about who collected the data, where it was collected and anything to note about it. 

Paper can however remain the most common long term source of data recording. Which is then translated in to digital format. 

### Data capture

Around the turn of the century most of the data ws being recorded on paper. 

Now most of the modern companies are going to be taking their data digitally. 

However older records. Which may provide useful information may still need to be digitilized. 

Spatial data was at one stage being copied over by tracing with a pencil. Then some software started to improve the process. (Not sure what it's like now)

Attribute data had either been typed out or if clean and clear enough could have been scanned. 

### Data sources

- digital topographical data
    - ESRI 2004
    - GLOBE 2004
    - LANDSAT

Most of the geospatial data was charged for physically or was free over the internet. I imagine that is the same. 

### Data integration and Geographical info systems

GIS  systems have and still continue to be general purpose and produced by some companies with large market shares. 

ARCView and and ARCGIS would have been dominant players. 

At the time of writing there was some trade offs between the more powerful mass produced GIS systems and the more specialized systems for mining. It's possible that has remained the same. 

It would be important to find out what companies are using for this. 

3D data and 2D differences were still stark in 2005

### Arrangement of data using layers

In the past different 2D layers are stacked up on top of each other and then you get a more complete picture. 

This was usually done in the past with actual paper

Later oder maps were compared with satellite data.

## Exploration economics
1. Mineral exploration 
    1. Study phase (1-2 years $250k)
    2. reconnaissance phase(2 years $500k - 1.5M
    3. Target testing (2-3 years $2.5M - 50M)
    4. pre-feasibility (2-3 years $2.5M - 50M)
    5. feasibility (2-3 years $2.5M - 50M)
    
    Further informaton on costs of mineral exploration  - Tilton et Al (1988) & Crowson (2003)
    
2. Feasibility
3. Mine development
4. Mining
5. Mineral processing
6. Smelting 
7. Refining
8. Marketing 
9. Closure

Exploration locations - considering factors - for normal mines

- Electric power
- water supply
- roads
- railways
- houses
- schools
- hospitals

Sustainable development

- Just as big a factor as political
- Mining minerals and sustainbale development project MMSD
- Jumping over the hurdles of political and local environmental concerns is also a process that takes several years to overcome, even after a mineral deposit has been deemed to be profitable.
- Ireland made positive tax laws for mining in the 60's
- 'Farming out' is a technique used by junior mining companies to allow bigger companies access to their finds.
- Major mining companies will sell finds that they consider too small to operate on.
- General success rate of 0.1% in exploration. At best 1%
- Data on exploration success is rare and scattered
- Gold and Nickel have been deemed as profitable, but base metals have in the past generally not, and only been a source of break even profitability
- The location and conditions of exploration have significant effect on whether a deposit is mined. In general, if the location is very bad, ( in land, no electricity etc) then the deposit must be of brilliant grade and be very large.

Exploration planning 

- Market planning, figuring out if there is a market to sell the minerals you are planning to mine.
- Metal pricing, where you think the price of metal is going to be in the lifetime of the mine. (Will there be a demand in a certain mineral? Will this make a new venture more profitable than another)

**Basis for a successful exploration team**

1. A high quality geologist team, with plenty of in house training 
2. supportive environment to foster innovation
3. Can do attitude amongst the workers
4. sound basis of operations(guidelines) 

For a small team, 7-10 geologists has traditionally been the best number. 

Exploration groups have traditionally been split in to location of deposit type groups.

Exploration  can account for 1 to 20% of the annual corporate cash flow.

Exploration efforts are more difficult to come by for smaller companies as bigger companies have the option of selling shares in their company. 

**Companies often lease vehicles and tools for exploration efforts. However they are often only given certain budgets to work with.**

- The cost of mine closure and reclamation of the site is now cause for a decrease in overall profits, this effects the exploration process.
- There is now such a thing as environmentally friendly deposits.
- The Kennecott mine in Alaska was a good example of an environmentally friendly mine. It had a very small ore vein but it was very high in percentage of copper. So the economic advantages of it are becoming more attractive as the environmental effects of big mining operations are being factored in to the cost of mine exploration.
- Analytical equipment is being miniaturised, which is making it much easier to do the testing of the minerals and get the data necessary for exploration.
## Topics of possible innovation
- more robust thermodynamic and kinetic geochemical data
- new ore-deposit models, particularly for deposits with less environmental impact when mined
- better geohydrological models
- geological maps of more mineralized areas
- databases for minerlized areas Geochemical/Geophysical methods
- hand-held and down-hole analytical instruments
- cross-bore-hole characterization
- better understanding of element mobility in soils
- drones for airborne geophysics
- low-cost, shallow seismic methods
- better intrepretation of hyperspectral data
- application of existing petroleum and geothermal drilling technologies to minerals sector
- novel drilling techniques (e.g., improvements in slimhole drilling and in-situ measurements)

## Drilling
**Drilling techniques**

- When an anomaly seems to have been found, then you can invest in a drilling investigation.
- There is two types of drilling, diamond drilling, and reverse circulation drilling. RC Drilling can create chip samples. Diamond drilling allows you to get one long sample of the rock.
- Diamond drilling is the most accurate.
- interval core from diamond drilling can be assayed and then you can create a boundary of cut off grade( ie you only have an area that has 0.5% copper, and you exclude and area that does not have that.

> "No significant changes in mineral drilling technology or techniques have been made for more than three decades" (NRC, 1994b)
> 

> "The need for miniaturization of existing drilling equipment is growing not only in the mineral industry but also for NASA to investigate drilling on Mars."
> 
- drilling is the most expensive process in the whole mining lifecycle. Hundreds of holes may have to be drilled  in order to understand the boundaries of an orebody
- Ways to reduce the cost of drilling
    - increasing drill rate
    - decreasing the amount of holes needed
    - reducing the energy requirements for drilling
- Novel drilling technologies could all contribute to the reduction of drilling these include
    - down hole drilling( a jack hammer turns the rock to dust and the dust is blown out)
- Down hole drilling, is a method for oil exploration. They use a gamma ray process to look at the radioactivity of the rocks that they are drilling.

> "The development of down-hole analytical devices, such as spectrometers, would make it possible to conduct in-situ, real-time analyses of trace elements in the rock mass that could dramatically shorten the time required to determine if a drill hole had 'hit' or not."
> 

The conclusion is the drilling technologies are definetly an area where there is significant problems. Which means that there is a problem that can be solved.

## Geophysical methods of exploration

- Magnetism - find the amount of magnetite/pyrrhotite in a sample. Useful for Volcanogenic massive sulfide ore deposits(VMS) deposits and Kimberlites(mineral containing diamonds)
    - VMS is a primary source of copper, zinc, lead and sulphur
- Electromagnetic - for sulphide minerals - Cu, Ni
- Induced polarisation - charges the sample with electrical charge to see how it responds. Used for things like copper, Precious metals and VMS
- Radioactivity - looking for sample that are sending off sub atomic radiation. uranium, Iron oxide copper gold (IOCG)
- Conductivity - determine the extent to which current passes through a material
- Density
- Geophysical methods are great when their is a great amount of overburden(rock above a deposit) That makes doing other methods impossible. Geophysical methods can detect anomalies by up to 500m. →
- Methods such as laser and X-ray fluorescence are used to determine the types of concentrations of different materials.
- Differential leaching techniques which is where you compare the solubility of certain minerals in a solution and how much they will continue to fall to the bottom of a liquid.
- Gravity measurements are also another, non invasive method of finding where there may be anomalies
- Magnetic surveys are traditionally done by aircraft(helicopters) that fly at a fixed distance from the ground. This is known as a magnetic survey system.
- Near surface seismic surveys which look at the types of differences in seismic activity to suggest where there may an anomaly. These can be very expensive. Especially due to data collection and data processing(THIS COULD BE DIFFERENT NOW) generally not a great incentive
- Lansat thematic mapper, looks at visible, infrared and ultraviolet light,
- Several different types of satellites look at topographic details of the earth. They get all sorts of imaging. This was first military data, but is now in the public domain. This is used to help in the exploration effort
- The airborne visible/infrared imaging spectrometer (AVRIS) is being developed? (Developed already?) This has allowed for mine exploration and mine closures.
- Multispectral analysis is being used to map the areas of the globe to give insights in to what is below the surface.
- Can you apply the same techniques that is used for imaging of galaxies to the earth for mineral exploration. that is, combing many small, close satellites to make a greater image?
- Hyper-spectral data is often at a high cost.
- Tomographic methods - like an MRI, beaming the area with electromagnetic waves and seeing the differences in composition on a screen.

## Geochemical methods of exploration
**Geochemical analysis**

- The data for geochemical and geophysical is obtained from soil, rock, water, vegetation, and vapor.
- Trace elements may indicate the possibility of deposits and ore veins.
- Concerns in the exploration process
    - groundwater and surface water quality
    - trace elements in existing soils
    - trace elements in ores, particularly elements of concern, such as mercury and arsenic
    - the presence of asbestiform minerals associated with industrial-minerals operations
    - the potential for acid-rock drainage (amounts of sulfide minerals and buffering minerals, climate, and hydrology)
    - location of aquifers in relation to ore bodies
    - existence and location of sensitive biological communities
    - climatological impacts on mining operations, including precipitation and prevailing winds
    - socioeconomic and cultural issues
- third party labs usually do the testing of the sediments found.
- Labs something called Assaying
- Rocks are dried, milled and crushed to create a fine material that can be analysed.
- This can give you the chemical concentration of the rocks.
- An example of assaying is to dissolve the sediment in an acid. Then an inductively coupled plasma (ICP) device will conduct mass spectrometry on the sediment. This will ascertain the type of materials that the sediment contains. ICP can detect up to 40 different elements.

**Rock sampling**

- When geologist grab rock types they can get three different types
    - Grab
    - Chip
    - Channel
- Grab means just grabbing the samples randomly and or just taking the samples that seem to be most common. This does not mean that the data is representative of the whole, but usually gives some information on where to go next.
- Chip means taking parts of chips of rock off the length of exposed rock and composing them in to one the size of one regular rock. Gives grade and width information(WHAT IS GRADE AND WIDTH)
- Channel: Means digging a channel in to the rock and getting and several of these to compose the rock sample. This is usually the most accurate form of analysis.

## Geological methods of exploration
- Geologists will create high quality maps of an area over time by examining rocks in the area
- Topographical map is done first, then an area is surveyed and a geological map is constructed of the area.
- The rocks must be surveyed. This is usually done by a process involving stripping and trenching the top surface of the area being surveyed.
- Stripping is the removal of top soil and dirt
- Trenching usually involves blasting the area to expose a vertical area to sample
- Besides from proprietary data held by companies, there doesn't seem to be any way that geologists can get large stores of data to be able to study how rock formations form. I think the idea here is that if geologists could have access to large amount of data across large areas, they could understand how certain minerals get to the surface of some areas and then they could better predict where to look for future exploration efforts.
- Understanding how fluids move around the earth is important in understanding how the minerals are deposited. This is an important factor in the exploration of minerals
- Cox and Singer 1992 - paper on models for ore deposits. This is a good thing because when you have the right amount of data then you reduce the environmental impact of mining in the wrong areas
- Much of the data in certain areas in physical format. Apparently the cost to do this is very expensive. Large companies have these databases, but they are generally not available to research institutes.

{% /section %}