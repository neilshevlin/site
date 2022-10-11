---
title: Geophysics for the Mineral Exploration Geoscientist - Denith & Mudge
description: Notes on the book Geophysics for the Mineral Exploration Geoscientist
---

{% section .hero %}
# Geophysics for the Mineral Exploration Geoscientist - Denith & Mudge
Summary of the preface

The book is meant to be a general overview of the use of geophysics in mineral exploration for the general exploration geologist. It includes information on data acquisition and current trends in the industry. It is in essence a overview for anyone who needs an understanding of geophysics in mineral exploration. 

Book places its emphasis on 

{% quote %} modern practice in mineral geophysics, but with an emphasis on the geological application of geophysical techniques. {% /quote %}

It seeks to showcase the real world applications of geophysics as they are used today and not in the past. They make use of examples with data and case studies. 


## Gravity and Magnetic fields

- Potential surfaces of potential energy are scalar quantities and are known as equipotential surfaces
- Potential fields are depicted as imaginary lines toward the center object of the field
- Field lines are vectors
- The strength of a field is known as its magnitude or intesnity
- Gravity fields are polar/monopoles. They only attract.

## Mass and Gravity

- Density and mass are the key terms in understanding gravity
- Centre of mass is where the gravitational attraction is attracted towards
- Gravity equations is an inverse square function
- SI unit of gravitational acceleration is {% latex %}$m/s^2${% /latex %}
- cgs unit is gal = {% latex %}$1cm/s^2${% /latex %}
- Miligals are used more often
- Gravity unit gu is 1 {% latex %}$μm/s^2${% /latex %}
- Rates of spatial change in gravity, i.e. grav- ity gradients, are defined in terms of a unit known as the Eötvös (Eo), which is a gradient of 10–6 {% latex %}$mgal/cm$, equal to 1 $gu/km$, 10–3 $gu/m$, 10–9 m s-2 m-1 or 1 ns-2.{% /latex %}

## Excess Mass

- Positive gravity occurs when the density of some volume of a body is more dense than the surrounding bodies
- Negative density leads to a mass deficiency -negative gravity anamoly
- The excess mass or deficiency is what gives rise to the gravitational anomaly and not the absolute mass

{% latex %}$ M_e - \Delta_{\rho}V = (\rho_{body}-\rho_{country})V ${% /latex %}

{% latex %}$M_a = (\rho_{body}/\Delta_{\rho})M_e = \rho_{body}/(\rho_{body}- \rho_{country})M_e${% /latex %}


## Gravity anomolies

- Gravity is a monopole so there is a peak of gravity over a dense source
- More information about the shape and location of a gravity anomaly can be found by finding tensor measurments
    - There is a strong need here for multivariable calculus in the understanding of gradients and tensors
    - It is very useful to know when dealing with inverse modelling.

## Magnetism and magnetic fields

- Concerns dipoles instead of gravitaional monopoles
- There is permanent and remanant magentism
- Permanent is instrisic to the material. Remenant can be induced
- Objects can have remenant, permamant , both or none.
- The overall magnetism is the vector sum of induced and permanent vectors
- Magnetism is a vector
- The direction of a magentic field is away from the north dipole and towards the south
- The units are defined in ref to the electromagentic current flowing through a wire. Amperes per metre
- Strength of a magnetic field is tesla. Can use nanotesla for geophsyics

## Magnetic suceptibility and induced magnetism

- The strength of induces magnetism is proportional to the strength of the externally applied field (B)

{% latex %}$J_{induced} = k(B/\mu_{0})${% /latex %}

μ0 is the magnetic permeability of a vacuum: 4π x 10–7 henry/m

k is the constant of proportionality and is the degree to which the body is magnetised in a magentic field. This is known as the **magentic susceptibility given by**

{% latex %}$k = (\mu_{0}/B)J_{induced}${% /latex %}
- The magnetic suceptibility is a ratio of the induced material and the field that induces it.
- Volume susceptibility may be quoted in cgs or SI units
- to convert from cgs to SI just multiply by 4π
- Mass suceptibility is also used

{% latex %}$χ = k\rho	${% /latex %}

- Magnetic susceptibility depends on magentic permeability
- Magnetic permenability is analgous to electrical conductivity. And is how easy a magnetic field can exist within a material
- non magentic materials have a permeability of close to 0

## Remnant magnetism

- When a magnetic field acts on certian materials, the field causes teh material to retain a magentic ‘memory’ which is known as remnance.
- The strength and orientation of the remenance are depednednt on the field that induced the remnance
- Remnant magnetism can differ significantly even in small materials, so we take the vector sum of the magnetic fields known as natural remnant magnetism (NRM)
- The remnance is parrellel to the inducing magnetic field. However other forces can cause the direction of remnance to disalign with the original inducing field.
- viscous remnant magnetism refers to a secondary magentism from prolonged exposure to an inducing magnetic field.
- The Koningsberger ratio is a ratio of the remenant to the induced magentism. Where values greater than 1 mean remenant is stronger and vice versa

{% latex %}$Q = \frac{J_{remnant}}{J_{induced}}${% /latex %}

- induced and remnant can have additive or opposing directions whoich can make their strnegth stronger in the case that they are aligned in the same direction.

## Types of magnetism

The type of magnetism that a material has is dependent on a few of it’s physical properties

- Electron spin and orbits
- Concentration of magnetic atoms/ions
- The interaction between the other atoms
- Its lattice strcuture

This gives rise to three distinct types of Magnetism

- Parramagentism
- Diamagnetism
- Ferromagnetism

The electron spins can create magnetic dipoles

The Magnetic dipoles from the electron spins can align or not align with an inducing field

In Diamagnetism the electron dipoles do not align with the major field. They are generally considered non magnetic

In Parramagnetism, the electron dipoles will align with the main field, and their is weak positive susceptibility. Paramagentism is a very weak magnetism but can be picked up by detaild geophsycial surveys

## Ferromagnetism

Atomic dipole coupling causes ferromagnetism. 

Magnetic domains are established, which are regions in which they have similar vector direction of magnetic field. 
In completely random domains, the different domains will cancel each other out and it will only be weakly magnetic

The more aligned the domains are, the stronger the magnetism of the material

Different domain layouts lead to different general types of magnetism

- Ferromagnetism (Domains align) → →
- Anti-ferromagnetism(Domains cancel each other out) ← →
- Canted Anti-ferromagnetism (domains cancel, but unevenly. At angles to each other)
- Ferrimagentism (there is a trend in the domain alignment but also smaller domains in the opposite alignment, but still giving rise to magnetism)

A strong enough external magnetic field can induce remnaant magnetism if it can cause the domains of the grain of material to shift and align. This is the cause of remnant magnetism. 

As temperature increases thermal agitation destroys the dipole alignment. 

The point at which dipole alignment is destroyed is called the *Curie point*

Magnetic anomolies have been found at greater depths in the earth but we are unsure what the cause is. 

## Self demagnitisation

The shape of some bodies that have some magnetic susceptibility above a certain threshold can cause the body itself to become demagnitised

This is also largely caused by **anisotropy** in the magentic material

## Magnetic anomolies

The Magnetic anamoly is simply the deviation of the total observed magnetic field from the understood norm.

When a body interacts with the inducing field, the resulting magnetic field can produce an anamoly

The direction or inclination of the magnetic field relative to the magnetic field of the inducer can cause different types of anamolies

The inclination is the direction of the field relative to the horizontal. 

The delination is the component of the vector facing away from North

Inclination is the angle between the horizontal component (Declination) and the main vector

Remnant magnetism, anistropy etc are all effects which can complicate the magnetic anamoly
Decomposition of the magnetic anamoly in to its tensor components is again the most acurate method of fully defining the field

## Measurements of the earths gravity field

The vast majority of the Earth’s mass is contained within the core and the mantle, the mass of the crust being a tiny fraction of the total. 

Geophysical surveys may measure gravity or spatial variations in gravity, i.e. gravity gradients. 

Most gravity measurements are made on the ground.

Downhole and underground measurements are possible, but are uncommon in mineral exploration. 

Measurements can also be made from the air, known as aerogravity for fixedwing aircraft and heligravity when made from a helicopter.

## Measuring relative gravity

A gravity meter measures the difference in the tension of a spring from which a small mass is suspended. This is one of the masses in Eq. (3.3), the other being the combined mass of the Earth. In principle, the mass is attached to one end of a beam which is pivoted at its other end, and suspended horizontally by the spring.

{% /section %}