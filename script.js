//  ist main banner slider show function js

const slider_ist = document.querySelector(".main_container");
const all_slider_child = slider_ist.children;
console.log(all_slider_child);


let count = 0;
//  call the function
slideshow();
// make the function
function slideshow() {
  for (let i = 0; i < all_slider_child.length; i++) {
    all_slider_child[i].style.cssText = " display:none"
  }
  count++;
  if (count > all_slider_child.length) {
    count = 1

  }

  all_slider_child[count - 1].style.cssText = "display:block";
  setTimeout(slideshow, 9000);
}
//  e--------------n-----------------d  

//  line 225 html ul js  start

const unorderd_list = document.querySelector(".ul_tag_for_tv_ect");
console.log(unorderd_list);
//  main big size div 
// img_tag
const img_section = document.querySelector(".iind_ist_slider");
console.log(img_section);
// h1_tag
const ist_h1_text = document.querySelector(".ist_h1_text");
console.log(ist_h1_text);
// br_tag
const br_tag = document.querySelector(".br_tag_i");
console.log(br_tag);
//  p_tag
const p_tag_i = document.querySelector(".p_tag_i");
console.log(p_tag_i);
// samll part_ist _div 1

// img
const ist_case_iind_img = document.querySelector(".ist_case_iind_img");
// h1
const ist_case_iind_h1_tag = document.querySelector(".ist_case_iind_h1_tag");
console.log(ist_case_iind_h1_tag);
// p
const ist_case_iind_p_tag = document.querySelector(".ist_case_iind_p_tag");
console.log(ist_case_iind_p_tag);

// samll part_ist _div 2
const ist_case_iiird_img = document.querySelector(".ist_case_iiird_img");
// h1
const ist_case_iiird_h1_tag = document.querySelector(".ist_case_iiird_h1_tag");
console.log(ist_case_iiird_h1_tag);
// p
const ist_case_iiird_p_tag = document.querySelector(".ist_case_iiird_p_tag");
console.log(ist_case_iiird_p_tag);




// samll part_ist _div 3
const ist_case_ivth_img = document.querySelector(".ist_case_ivth_img");
// h1
const ist_case_ivth_h1_tag = document.querySelector(".ist_case_ivth_h1_tag");
console.log(ist_case_ivth_h1_tag);
// p
const ist_case_ivth_p_tag = document.querySelector(".ist_case_ivth_p_tag");
console.log(ist_case_ivth_p_tag);


// samll part_ist _div 4
const ist_case_vth_img = document.querySelector(".ist_case_vth_img");
// h1
const ist_case_vth_h1_tag = document.querySelector(".ist_case_vth_h1_tag");
console.log(ist_case_vth_h1_tag);
// p
const ist_case_vth_p_tag = document.querySelector(".ist_case_vth_p_tag");
console.log(ist_case_vth_p_tag);


//  incomplete


const tileimg = [
  {
    id: "1",
    img: [
      "./micro_image/ist_case_img.jpeg",
      "./micro_image/galaxy_tab_s9.jpeg",
      "./micro_image/washing_machine.jpeg",
      "./micro_image/samsung_corporate.jpeg",
      "./micro_image/samsung_LED.jpeg"
    ],
    htxt: [
      "Grab an extra 5% off by combining your favourites",
      "Galaxy Tab S9 Series Starting 3454.14/mo*",
      "8.0 kgEcobubble Starting 32740*",
      "Galaxy Tab S9 Series Starting $3454.14/mo*",
      "Galaxy Tab S9 Series Starting $3454.14/mo*"
    ],
    ptext: [
      "Avail benefits up to & 18000*",
      "Avail benefits up to & 17000*",
      "Incl. & 4250* off with instant bank discount & app voucher",
      "Avail benefits up to & 17000*",
      "Avail benefits up to & 17000*"
    ]
  },
  //----- 2 ------//
  {
    id: "2",
    img: [
      "./micro_image/mobile_section_i.jpeg",
      "./micro_image/iind_case_iind_img_sec.jpeg",
      "./micro_image/mobile_section_iii.jpeg",
      "./micro_image/mobile_section_iv.jpeg",
      "./micro_image/mobile_section_v.jpeg"
    ],
    htxt: [
      "Galaxy Z Fold5 | Z Flip5 Starting ₹ 83999*",
      " Galaxy Z Flip5  Starting ₹ 83999*",
      "Galaxy A34 | A54 5G  Starting ₹ 26999 * ",
      "Galaxy S23 Ultra Starting ₹ 104999*",
      " Galaxy S20 FE 5G  Starting ₹ 26999*"],

    ptext: [
      "And Save up to ₹ 18000*",
      "Avail benefits up to ₹ 16000*",
      "Water resistant (IP67)",
      "Bundle with an accessory & get 5% off on both",
      "Bundle with an accessory & get 5% off on both"
    ]
  },
  //----- 3 ------//
  {
    id: "3",
    img: [
      "./micro_image/iiird_case_img.jpeg",
      "./micro_image/tv_2nd_img.jpeg",
      "./micro_image/tv_3rd_img.jpeg",
      "./micro_image/tv_4th_img.jpeg",
      "./micro_image/tv_5th_img.jpeg",

    ],
    htxt: [
      "Upgrade to QLED experience    Starting ₹ 659900",
      "1m 08cm (43) CUE60 Starting ₹ 29990*",
      " The Frame  Starting ₹ 59990*   ",
      " 1m 08cm (43) AUE65  Starting ₹ 29990* ",
      "The Freestyle  Starting ₹ 56990*",
    ],

    ptext: [
      "Incl ₹ 4000* off with instant bank discount",
      "  Incl. ₹ 3000* off with instant bank discount",
      "    Get free bezel worth ₹ 2490*",
      "    Incl. ₹ 3000* off with instant bank discount",
      "  Incl. ₹ 3000* off with instant bank discount",
    ]
  },
  //-------- 4 -------//
  {
    id: "4",
    img: [
      "./micro_image/ivth_case_img.jpeg",
      "./micro_image/app_2nd_img.jpeg",
      "./micro_image/app_3rd_img.jpeg",
      "./micro_image/app_4th_img.jpeg",
      "./micro_image/app_5th_img.jpeg",
    ],
    htxt: [
      "Pre-reserve now with ₹ 3000* & get ₹ 5000* off",
      "Avail benefits up to ₹ 16000*",
      "Water resistant (IP67)",
      "Bundle with an accessory & get 5% off on both",
      "Bundle with an accessory & get 5% off on both",
    ],
    ptext: [
      " Pre-reserve now with ₹ 3000* & get ₹ 5000* off",
      " Avail benefits up to ₹ 16000*",
      " Water resistant (IP67)",
      " Bundle with an accessory & get 5% off on both",
      " Bundle with an accessory & get 5% off on both",
    ]
  },
  //------5-------//
  {
    id: "5",
    img: [
      "./micro_image/vth_case_img.jpeg",
      "./micro_image/ge_1st_img_sec.jpeg",
      "./micro_image/ge_2nd_img_sec.jpeg",
      "./micro_image/ge_3rd_img_sec.jpeg",
      "./micro_image/ge_4th_img_sec.jpeg",
    ],
    htxt: [
      " Galaxy Book3 Starting ₹ 64990*",
      " Galaxy Tab S6 Lite Starting ₹ 17999* ",
      " Galaxy Watch4 Starting ₹ 8990* ",
      " Galaxy Buds FE Starting ₹ 7999*",
      " M5 Smart Monitor Starting ₹ 15299* ",

    ],
    ptext: [
      "Avail benefits worth ₹ 17000*",
      "Grab Screen protection pack at just ₹ 564* ",
      "Incl. ₹ 1000* off with instant bank discount",
      "Incl. ₹ 2000* off with instant bank discoun",
      "Incl. ₹ 1700* off with instant cart discount",
    ]
  },
  {
    id: "6",
    img: [
      "./micro_image/mobile_section_v.jpeg",
      "./micro_image/iind_case_iind_img_sec.jpeg",
      "./micro_image/mobile_3rd_img.jpeg",
      "./micro_image/mobile_4th_img.jpeg",
      "./micro_image/mobile_5th_img.jpeg",
    ],
    htxt: [
      " Galaxy Book3 Series",
      " Galaxy Z Flip5  Starting ₹ 83999*",
      " Galaxy A34 | A54 5G    Starting ₹ 26999*",
      " Galaxy S23 Ultra Starting ₹ 104999*",
      " Galaxy S20 FE 5G  Starting ₹ 26999*",

    ],
    ptext: [
      "Avail benefits worth ₹ 17000*",
      "Avail benefits up to ₹ 16000*",
      "Water resistant (IP67)",
      "Bundle with an accessory & get 5% off on both",
      "Bundle with an accessory & get 5% off on both",
    ]
  }
]


const list = unorderd_list.children;
console.log(list);



function switchFunction(id) {

  img_section.src = tileimg[id].img[0];
  ist_h1_text.textContent = tileimg[id].htxt[0];
  p_tag_i.textContent = tileimg[id].ptext[0];
  // small ist case div 1
  ist_case_iind_img.src = tileimg[id].img[1];
  ist_case_iind_h1_tag.textContent = tileimg[id].htxt[1];
  ist_case_iind_p_tag.textContent = tileimg[id].ptext[1]
  // small iind case div 2
  ist_case_iiird_img.src = tileimg[id].img[2];
  ist_case_iiird_h1_tag.textContent = tileimg[id].htxt[2];
  ist_case_iiird_p_tag.textContent = tileimg[id].ptext[2]
  // small iind case div 3
  ist_case_ivth_img.src = tileimg[id].img[3];
  ist_case_ivth_h1_tag.textContent = tileimg[id].htxt[3];
  ist_case_ivth_p_tag.textContent = tileimg[id].ptext[3]
  // small iind case div 4
  ist_case_vth_img.src = tileimg[id].img[4];
  ist_case_vth_h1_tag.textContent = tileimg[id].htxt[4];
  ist_case_vth_p_tag.textContent = tileimg[id].ptext[4]
  // small iind case div 5
  ist_case_vth_img.src = tileimg[id].img[5];
  ist_case_vth_h1_tag.textContent = tileimg[id].htxt[5];
  ist_case_vth_p_tag.textContent = tileimg[id].ptext[5]

}

unorderd_list.addEventListener("click", (event) => {
  const id = event.target.id;

  switch (id) {
    case "0":
      switchFunction(id);
      break;
    case "1":
      switchFunction(id);
      break;
    case "2":
      switchFunction(id);
      break;
    case "3":
      switchFunction(id);
      break;
    case "4":
      switchFunction(id);
      break;
    case "5":
      switchFunction(id);
      break;
  }
})

//------- new ------//

const li = document.querySelectorAll(".newone");
const child = li.children;
const newimg = document.querySelectorAll(".mob_img")
const htag = document.querySelector(".mobile_tab_section_h1_tag")
const ptag = document.querySelector(".mobile_tab_section_p_tag")

console.log(newimg)
const banner = [
  {
    nimg: [
      "./micro_image/Z-fold5.avif",
      "./micro_image/flip5.avif",
      "./micro_image/TabS9-FE.avif",
      "./micro_image/Watch6.avif",
      "./micro_image/S23-FE.avif",

    ],
    btext: [
      "Galaxy Z Fold5",
      "Galaxy Z Flip5",
      "Galaxy Tab S9 Series",
      "Galaxy Watch6 | Watch6 Classic",
      "Galaxy S23 Ultra",
    ],
    stext: [
      "Starting ₹ 138999*",
      "Starting ₹ 49999*",
      "Starting ₹ 32999*",
      "Starting ₹ 55990*",
      "Starting ₹ 21999*",
    ],
  },
  {
    nimg1: [
      "./micro_image/Neo-QLED.avif",
      "./micro_image/Samsung-OLED.jpg",
      "./micro_image/QLED.avif",
      "./micro_image/The-Frame.avif",
      "./micro_image/The_Freestyle_1.avif",
    ]
  },
  {
    nimg2: [
      "./micro_image/8kg-Ecobubble.avif",
      "./micro_image/BESPOKE.avif",
      "./micro_image/convertible.avif",
      "./micro_image/Top_Load_Ecobubble.avif",
      "./micro_image/Jet_Bot1.avif",
    ]
  }
]
function change(newid) {
  //--- 1 -----//
  newimg[0].src = banner[0].nimg[newid];
  htag.textContent = banner[0].btext[newid];
  ptag.textContent = banner[0].stext[newid];
}

let a = li[1]
console.log(a)
for (var i = 0; i < 1; i++) {
  li[i].addEventListener("click", function () {
    const newid = event.target.id;
    switch (change(), newid) {
      case "0":
        change(newid);
        break;
      case "1":
        change(newid);
        break;
      case "2":
        change(newid);
        break;
      case "3":
        change(newid);
        break;
      case "4":
        change(newid);
        break;
    }
  })
}
// li.addEventListener("click", (event) => {

