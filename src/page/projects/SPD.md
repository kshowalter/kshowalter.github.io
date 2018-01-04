# Solar Plans Designer

## History

I was brought on to the project to create a web application to take user input, and use an electrical design algorithm to design a photovoltac system that is compliant with the National Electical Code. The completed design was to be used to populate a customized template drawing that a contractor could use when submitting a permit application. In the end I also wrote the design algorithm and electrical drawing, with feedback from NEC experts and permit officials. 

I wrote it originally as a full stack application with Meteor. ([SPD code repository](https://github.com/FSEC/SPD))  
When the project was later integrated into an existing dotnet application, the server side was converted to  standard Node.js.

The electrical characteristics of the design are calculated by what is refered to as the ["Solar Design Algorithm"](https://github.com/FSEC/solar_design_algorithm). That repsository contains a script that extracts the code in the markdown files, and saves them as JavaScript files. Those files are copied to the [SPD server](https://github.com/FSEC/SPD_server) and used as modules.

The final result is a PDF drawing that a solar contractor can submit with their building permit application. This SPD system is used as the express design option in [FSEC's certification application](https://scp.fsec.ucf.edu/). Unfortunatly the system is only available to licenced contrators. A sample is available below.

[![Sample Drawing|class:image_full_width](assets/FSEC/permit_1511_p1.png)](assets/FSEC/permit_1511_p1.pdf)
