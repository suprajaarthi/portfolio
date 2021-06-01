/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable1 = document.querySelector(".citeT1");
const citeTable2 = document.querySelector(".citeT2");
const citeTable3 = document.querySelector(".citeT3");
const citeTable4 = document.querySelector(".citeT4");
const citeTable5 = document.querySelector(".citeT5");
const citeTable6 = document.querySelector(".citeT6");
const citeTable7 = document.querySelector(".citeT7");
const citeTable8 = document.querySelector(".citeT8");

const research = [
    {
        title : "Prevention of phishing attacks in voting system using visual cryptography implemented using Dual OTP techniques and virtual admin system",
        authors : "A. Amrutha Rose,Paradise Mercy Praise,G. Jaspher Willsie Kathrine,Eligious C Kalaivani",
        conferences : "3rd International Conference in International Conference on Trends in Electronics and Informatics (ICOEI)",
        researchYr : 2019,
        citebox:"http://icoei.com/2021/",
        // citebox : "https://docs.google.com/presentation/d/1vp5oCT7PJHDsnFu2yIYPyXQvPJ7EdPVfQP7_tHGpMGs/edit?usp=sharing",
        image : "https://innovationatwork.ieee.org/wp-content/uploads/2019/11/bigstock-Internet-Security-Firewall-Or-326464240_1024X684.png"
    },

    {
        
        title : "Smart Trip planning website to organize the tour in a smooth and planned manner while tracking the expense lively",
        authors : "Agostino Nuzzolo,Comi Antonio,Luca Rosati",
        conferences : "International Conference on Intelligent Transportation Systems",
        researchYr : 2015,
        citebox : "https://www.ieee-itss.org/itsc",
        image:"https://www.aheadrm.com/wp-content/uploads/2018/04/package-allotment.jpg",
        // image : "https://www.techjockey.com/blog/wp-content/uploads/2018/11/Manage-Your-Agency-with-The-Best-Tour-Travel-Software_1.png"
    },
    {
        title : "Ecommerce network with price coparison websites, to debug the price of products from differnet participating retailers such as Amazon,Flipkart",
        authors : "Ladislav Beranek,Radim Remes",
        conferences : "International Conference on Advanced Computer Information Technologies (ACIT)",
        researchYr : 2019,
        citebox : "http://www.acit.in/",
        image : "https://www.softpal.com/portals/97/images/ecommerce_products/content_promotion.png"
    },

    {
        title : "Real-Time loclaized Multi Object detection  using Deep Learning and Flutter",
        authors : "Cong Tang,Yunsong Feng,Xing Yang,Chao Zheng",
        conferences : "International Conference on Information Science and Control Engineering (ICISCE)",
        researchYr : 2019,
        citebox : "http://www.icisce.org/",
        image : "https://business.blogthinkbig.com/wp-content/uploads/sites/2/2019/04/eye-2771174_1920.jpg"
    },

];

const cite1 = [{

}];

const cite2 = [{

}];

const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox}) =>
        (output +=`
            <tr> 
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <br><br><br>
            <a href="#0" class="paperTitle"> ${title} </a> <br><br>
            <div> ${authors} </div> 
            <br><div class="rConferences"> ${conferences} 
            <div class="researchY">${researchYr}</div>
            </div>
        
            <!--CITE BUTTON-->
            <div>
            
            <a href="${citebox}" class="button button-accent button-small button-cite">CITE</a

            </div>
            </td>
            </tr>
            `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const citeData1 = () => {
    let output = "";
    cite1.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable1.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData1);

const citeData2 = () => {
    let output = "";
    cite2.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable2.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData2);
