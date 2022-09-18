let optionpage                                          = document.querySelector(".optionpage");
let mainPage                                            = document.querySelector(".mainPage");
let addProduct                                          = document.querySelector(".addProduct");
let seeAllProduct                                       = document.querySelector(".seeAllProduct");
let searchBySearyalNum                                  = document.querySelector(".searchBySearyalNum");
let searchByName                                        = document.querySelector(".searchByName");
let LogOut                                              = document.querySelector(".LogOut");
let sectionMainPage                                     = document.querySelector(".sectionMainPage");
let sectionAddProduct                                   = document.querySelector(".sectionAddProduct");
let sectionSeeAllProduct                                = document.querySelector(".sectionSeeAllProduct");
let sectionsearchBySearyalNum                           = document.querySelector(".sectionsearchBySearyalNum");
let sectionsearchByName                                 = document.querySelector(".sectionsearchByName");
let pageTitle                                           = document.querySelector(".pageTitle");
let containermainpage                                   = document.querySelector(".containermainpage");
let ptn_menu                                            = document.querySelector(".ptn_menu");
let ptn_menu2                                           = document.querySelector(".ptn_menu2");
let ptn_menu3                                           = document.querySelector(".ptn_menu3");
let ptn_menu4                                           = document.querySelector(".ptn_menu4");
let input_name                                          = document.querySelector(".input_name");
let input_price                                         = document.querySelector(".input_price");
let input_taxes                                         = document.querySelector(".input_taxes");
let total_p                                             = document.querySelector(".total_p");
let input_kind                                          = document.querySelector(".input_kind");
let input_count                                         = document.querySelector(".input_count");
let button_create2                                      = document.querySelector(".button_create2");
let button_create                                       = document.querySelector(".button_create");
let done_faild                                          = document.querySelector(".done_faild");
let done                                                = document.querySelector(".done");
let faild                                               = document.querySelector(".faild");
let inside                                              = document.querySelector(".inside");
let deleteAll                                           = document.querySelector(".deleteAll");
let inp_count                                           = document.querySelector(".inp_count");
let ptn_create2                                         = document.querySelector(".ptn_create2");
let data454                                             = document.querySelector(".data454");
let input_search_by_name                                = document.querySelector(".input_search_by_name");
let table_body                                          = document.querySelector(".table_body");
let maxcontainer                                        = document.querySelector(".maxcontainer");
let noAccount                                           = document.querySelector(".noAccount");
let wrong_name                                          = document.querySelector(".wrong_name");
let done_name                                           = document.querySelector(".done_name");
let wrong_price                                         = document.querySelector(".wrong_price");
let done_price                                          = document.querySelector(".done_price");
let done_taxes                                          = document.querySelector(".done_taxes");
let wrong_kind                                          = document.querySelector(".wrong_kind");
let done_kind                                           = document.querySelector(".done_kind");
let done_count                                          = document.querySelector(".done_count");
let index_to_update                                     = 0;
let to_down_update                                      = 0;
let array_summeri                                       = [];
let arr_allProducts                                     = [];
if(localStorage.products != undefined)
{
    arr_allProducts = JSON.parse(localStorage.products);
}
if(localStorage.summeries_products != undefined)
{
    array_summeri=JSON.parse(localStorage.summeries_products);
}
function showProducts() {
    let products='';
    for(let i=0;i<arr_allProducts.length;i++)
    {
        products += 
        `
        <div>
                ${i+1})
                <div><p>${arr_allProducts[i].name}</p></div>
                <div><p>${arr_allProducts[i].kind}</p></div>
                <div><p>${arr_allProducts[i].price}</p></div>
                <div><p>${arr_allProducts[i].taxes}</p></div>
                <div><p>${arr_allProducts[i].totalPrice}</p></div>
                <div>
                    <button onclick="deleteElement(${i})">Delete</button>
                </div>
                <div>
                    <button onclick="updateElement(${i})">Update</button>
                </div>
        </div>
        <div class="hr">
                <div><hr></div>
                <div><hr></div>
                <div><hr></div>
                <div><hr></div>
                <div><hr></div>
                <div><hr></div>
                <div><hr></div>
        </div>
        `;
    }
    inside.innerHTML = products;
    deleteAll.innerHTML=`Delete All ( ${arr_allProducts.length} )`;
}
// console.log(optionpage,mainPage,addProduct,seeAllProduct,searchBySearyalNum,searchByName,LogOut,sectionMainPage,sectionAddProduct,sectionSeeAllProduct,sectionsearchBySearyalNum,sectionsearchByName);
LogOut.onclick = function() {
    localStorage.logout=0;
    window.onload();
}
deleteAll.onclick = function() {
    arr_allProducts=[];
    localStorage.products = JSON.stringify(arr_allProducts);
    showProducts();
}
input_name.onkeyup = function() {
    done_faild.classList.add("hidden");
    wrong_name.classList.add("hidden");
    done_name.classList.add("hidden");
    wrong_price.classList.add("hidden");
    done_price.classList.add("hidden");
    done_taxes.classList.add("hidden");
    wrong_kind.classList.add("hidden");
    done_kind.classList.add("hidden");
    done_count.classList.add("hidden");
}
input_count.onkeyup = function() {
    done_faild.classList.add("hidden");
    wrong_name.classList.add("hidden");
    done_name.classList.add("hidden");
    wrong_price.classList.add("hidden");
    done_price.classList.add("hidden");
    done_taxes.classList.add("hidden");
    wrong_kind.classList.add("hidden");
    done_kind.classList.add("hidden");
    done_count.classList.add("hidden");
}
input_kind.onkeyup = function() {
    done_faild.classList.add("hidden");
    wrong_name.classList.add("hidden");
    done_name.classList.add("hidden");
    wrong_price.classList.add("hidden");
    done_price.classList.add("hidden");
    done_taxes.classList.add("hidden");
    wrong_kind.classList.add("hidden");
    done_kind.classList.add("hidden");
    done_count.classList.add("hidden");
}
input_price.onkeyup = function() {
    done_faild.classList.add("hidden");
    wrong_name.classList.add("hidden");
    done_name.classList.add("hidden");
    wrong_price.classList.add("hidden");
    done_price.classList.add("hidden");
    done_taxes.classList.add("hidden");
    wrong_kind.classList.add("hidden");
    done_kind.classList.add("hidden");
    done_count.classList.add("hidden");
    let result;
    if(input_taxes.value.length == 0)
    {
        result=parseInt(input_price.value) + 0;
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0)
    {
        result = 0 + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0 && input_taxes.value.length == 0)
    {
        total_p.innerHTML="Total: ";
    }
    if(input_taxes.value.length > 0 && input_price.value.length > 0)
    {
        result=parseInt(input_price.value) + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }
}
input_price.onchange = function() {
    let result;
    if(input_taxes.value.length == 0)
    {
        result=parseInt(input_price.value) + 0;
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0)
    {
        result = 0 + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0 && input_taxes.value.length == 0)
    {
        total_p.innerHTML="Total: ";
    }
    if(input_taxes.value.length > 0 && input_price.value.length > 0)
    {
        result=parseInt(input_price.value) + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }
}
input_taxes.onkeyup = function() {
    done_faild.classList.add("hidden");
    wrong_name.classList.add("hidden");
    done_name.classList.add("hidden");
    wrong_price.classList.add("hidden");
    done_price.classList.add("hidden");
    done_taxes.classList.add("hidden");
    wrong_kind.classList.add("hidden");
    done_kind.classList.add("hidden");
    done_count.classList.add("hidden");
    let result;
    if(input_taxes.value.length == 0)
    {
        result=parseInt(input_price.value) + 0;
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0)
    {
        result = 0 + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0 && input_taxes.value.length == 0)
    {
        total_p.innerHTML="Total: ";
    }
    if(input_taxes.value.length > 0 && input_price.value.length > 0)
    {
        result=parseInt(input_price.value) + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }

}
input_taxes.onchange = function() {
    let result;
    if(input_taxes.value.length == 0)
    {
        result=parseInt(input_price.value) + 0;
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0)
    {
        result = 0 + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0 && input_taxes.value.length == 0)
    {
        total_p.innerHTML="Total: ";
    }
    if(input_taxes.value.length > 0 && input_price.value.length > 0)
    {
        result=parseInt(input_price.value) + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }
}
ptn_menu.onclick = function() {
    localStorage.page=0;
    window.onload();
}
ptn_menu2.onclick = function() {
    localStorage.page=0;
    input_name.value='';
    input_price.value='';
    input_taxes.value='';
    input_kind.value='';
    input_count.value='';
    total_p.innerHTML='Total: ';
    button_create.innerHTML="Create";
    done_faild.classList.add("hidden");
    wrong_name.classList.add("hidden");
    done_name.classList.add("hidden");
    wrong_price.classList.add("hidden");
    done_price.classList.add("hidden");
    done_taxes.classList.add("hidden");
    wrong_kind.classList.add("hidden");
    done_kind.classList.add("hidden");
    done_count.classList.add("hidden");
    window.onload();
}
ptn_menu3.onclick = function() {
    localStorage.page=0;
    window.onload();
}
ptn_menu4.onclick = function() {
    localStorage.page=0;
    window.onload();
}
mainPage.onclick = function() {
    sectionMainPage.classList.remove("hidden");
    optionpage.classList.add("hidden");
    sectionAddProduct.classList.add("hidden");
    sectionSeeAllProduct.classList.add("hidden");
    sectionsearchByName.classList.add("hidden");
    localStorage.page=1;
    pageTitle.innerHTML="main Page";
    showProducts();
}
addProduct.onclick = function() {
    sectionAddProduct.classList.remove("hidden");
    sectionMainPage.classList.add("hidden");
    optionpage.classList.add("hidden");
    sectionSeeAllProduct.classList.add("hidden");
    sectionsearchByName.classList.add("hidden");
    pageTitle.innerHTML="Add Product";
    localStorage.page=2;
}
seeAllProduct.onclick = function() {
    sectionSeeAllProduct.classList.remove("hidden");
    sectionMainPage.classList.add("hidden");
    optionpage.classList.add("hidden");
    sectionAddProduct.classList.add("hidden");
    sectionsearchByName.classList.add("hidden");
    pageTitle.innerHTML="see All Product";
    localStorage.page=3;
    if(localStorage.summeries_products != undefined)
    {
        array_summeri=JSON.parse(localStorage.summeries_products);
    }
    show_products_in_Table2();
    show_products_in_Table();
}
searchByName.onclick = function() {
    sectionsearchByName.classList.remove("hidden");
    sectionMainPage.classList.add("hidden");
    optionpage.classList.add("hidden");
    sectionAddProduct.classList.add("hidden");
    sectionSeeAllProduct.classList.add("hidden");
    
    pageTitle.innerHTML="search By Name";
    localStorage.page=5;
    input_search_by_name.value='';
    show_in_search_after_delete();
}
window.onload = function() {
    if(localStorage.logout == 0)
    {
        pageTitle.innerHTML = `no account log in now`;
        noAccount.classList.remove("hidden");
        maxcontainer.classList.add("hidden");
    }
    else 
    {
        pageTitle.innerHTML = `system`;
        maxcontainer.classList.remove("hidden");
        noAccount.classList.add("hidden");
        if(localStorage.page != undefined) 
        {
            if(localStorage.page==0)
            {
                sectionMainPage.classList.add("hidden");
                optionpage.classList.remove("hidden");
                sectionAddProduct.classList.add("hidden");
                sectionSeeAllProduct.classList.add("hidden");
                
                sectionsearchByName.classList.add("hidden");
                pageTitle.innerHTML="System";
            }else if(localStorage.page==1)
            {
                sectionMainPage.classList.remove("hidden");
                optionpage.classList.add("hidden");
                sectionAddProduct.classList.add("hidden");
                sectionSeeAllProduct.classList.add("hidden");
                
                sectionsearchByName.classList.add("hidden");
                pageTitle.innerHTML="main Page";
            }else if(localStorage.page==2)
            {
                sectionAddProduct.classList.remove("hidden");
                sectionMainPage.classList.add("hidden");
                optionpage.classList.add("hidden");
                sectionSeeAllProduct.classList.add("hidden");
                sectionsearchByName.classList.add("hidden");
                pageTitle.innerHTML="Add Product";
                input_name.value='';
                input_price.value='';
                input_taxes.value='';
                input_kind.value='';
                input_count.value='';
                total_p.innerHTML='Total: ';
            }else if(localStorage.page==3)
            {
                sectionSeeAllProduct.classList.remove("hidden");
                sectionMainPage.classList.add("hidden");
                optionpage.classList.add("hidden");
                sectionAddProduct.classList.add("hidden");
                
                sectionsearchByName.classList.add("hidden");
                pageTitle.innerHTML="see All Product";
                if(localStorage.summeries_products != undefined)
                {
                    array_summeri=JSON.parse(localStorage.summeries_products);
                }
                show_products_in_Table2();
                show_products_in_Table();
            }else if(localStorage.page==5)
            {
                sectionsearchByName.classList.remove("hidden");
                sectionMainPage.classList.add("hidden");
                optionpage.classList.add("hidden");
                sectionAddProduct.classList.add("hidden");
                sectionSeeAllProduct.classList.add("hidden");
                pageTitle.innerHTML="search By Name";
                input_search_by_name.value='';
                show_in_search_after_delete();
            }
        }
    }
}
button_create.onclick = function() {
    if(button_create.textContent=="Create")
    {
        if(input_name.value.length >= 3 && input_price.value >= 0 && input_kind.value.length >= 3) {
            if(input_count.value.length==0 || input_count.value <= 0)
            {
                input_count.value=1;
            }
            if(input_taxes.value < 0)
            {
                input_taxes.value=0;
            }
            for(let i=0;i<input_count.value;i++)
            {
                let result=parseInt(input_price.value) + parseInt(input_taxes.value);
                let product = {
                    name:input_name.value,
                    price:input_price.value,
                    taxes:input_taxes.value,
                    totalPrice:parseInt(input_price.value) + parseInt(input_taxes.value),
                    kind:input_kind.value,
                };
                arr_allProducts.push(product);
                localStorage.products = JSON.stringify(arr_allProducts);
                done_faild.classList.remove("hidden");
                done.classList.remove("hidden");
                setTimeout(()=>{
                    done_faild.classList.add("hidden");
                    done.classList.add("hidden");
                },1000);
                
            }
            input_name.value='';
            input_price.value='';
            input_taxes.value='';
            input_kind.value='';
            input_count.value='';
            total_p.innerHTML='Total: ';
            arr_allProducts = JSON.parse(localStorage.products);
            showProducts();
            if(localStorage.summeries_products != undefined)
            {
                array_summeri=JSON.parse(localStorage.summeries_products);
            }
            show_products_in_Table2();
            show_products_in_Table();
        }
        else{
            inp_count.value=0;
            done_faild.classList.remove("hidden");
            faild.classList.remove("hidden");
            setTimeout(()=>{
                faild.classList.add("hidden");
            },1000);
            if(input_name.value.length < 3)
            {
                done_faild.classList.remove("hidden");
                wrong_name.classList.remove("hidden");
            }else{
                done_faild.classList.remove("hidden");
                done_name.classList.remove("hidden");
            }
            if(input_price.value.length == 0)
            {
                done_faild.classList.remove("hidden");
                wrong_price.classList.remove("hidden");
            }else{
                done_faild.classList.remove("hidden");
                done_price.classList.remove("hidden");
            }
            done_faild.classList.remove("hidden");
            done_taxes.classList.remove("hidden");
            if(input_kind.value.length < 3)
            {
                done_faild.classList.remove("hidden");
                wrong_kind.classList.remove("hidden");
            }else{
                done_faild.classList.remove("hidden");
                done_kind.classList.remove("hidden");
            }
            done_faild.classList.remove("hidden");
            done_count.classList.remove("hidden");
        }
    }
    // ******************************************************************************************************
    else if(button_create.textContent=="Update"){
        if(input_name.value.length >= 3 && input_price.value >= 0 && input_price.value.length > 0 && input_kind.value.length >= 3)
        {
            if(input_taxes.value.length == 0)
            {
                input_taxes.value=0;
            }
            arr_allProducts[index_to_update].name=input_name.value;
            arr_allProducts[index_to_update].price=input_price.value;
            arr_allProducts[index_to_update].taxes=parseInt(input_taxes.value);
            arr_allProducts[index_to_update].kind=input_kind.value;
            arr_allProducts[index_to_update].totalPrice=parseInt(arr_allProducts[index_to_update].price) + parseInt(arr_allProducts[index_to_update].taxes);
            localStorage.products = JSON.stringify(arr_allProducts);
            input_name.value='';
            input_price.value='';
            input_taxes.value='';
            input_kind.value='';
            input_count.value='';
            sectionMainPage.classList.remove("hidden");
            optionpage.classList.add("hidden");
            sectionAddProduct.classList.add("hidden");
            sectionSeeAllProduct.classList.add("hidden");
            sectionsearchByName.classList.add("hidden");
            inp_count.classList.remove("hidden");
            localStorage.page=1;
            pageTitle.innerHTML="main Page";
            button_create.innerHTML="Create";
            showProducts();
            window.scrollTo({
                top:to_down_update,
                behavior:"smooth",
            });
            if(localStorage.summeries_products != undefined)
            {
                array_summeri=JSON.parse(localStorage.summeries_products);
            }
            show_products_in_Table2();
            show_products_in_Table();
        }
        else
        {
            done_faild.classList.remove("hidden");
            faild.classList.remove("hidden");
            setTimeout(()=>{
                faild.classList.add("hidden");
            },1000);
            if(input_name.value.length < 3)
            {
                done_faild.classList.remove("hidden");
                wrong_name.classList.remove("hidden");
            }else{
                done_faild.classList.remove("hidden");
                done_name.classList.remove("hidden");
            }
            if(input_price.value.length == 0)
            {
                done_faild.classList.remove("hidden");
                wrong_price.classList.remove("hidden");
            }else{
                done_faild.classList.remove("hidden");
                done_price.classList.remove("hidden");
            }
            done_faild.classList.remove("hidden");
            done_taxes.classList.remove("hidden");
            if(input_kind.value.length < 3)
            {
                done_faild.classList.remove("hidden");
                wrong_kind.classList.remove("hidden");
            }else{
                done_faild.classList.remove("hidden");
                done_kind.classList.remove("hidden");
            }
            done_faild.classList.remove("hidden");
            done_count.classList.remove("hidden");
        }
    }
    // ***********************************************************************************************************************
    else{
        if(input_name.value.length >= 3 && input_price.value >= 0 && input_price.value.length > 0 && input_kind.value.length >= 3){
            arr_allProducts[index_to_update].name=input_name.value;
            arr_allProducts[index_to_update].price=input_price.value;
            arr_allProducts[index_to_update].taxes=input_taxes.value;
            arr_allProducts[index_to_update].kind=input_kind.value;
            arr_allProducts[index_to_update].totalPrice=parseInt(arr_allProducts[index_to_update].price) + parseInt(arr_allProducts[index_to_update].taxes);
            localStorage.products = JSON.stringify(arr_allProducts);
            input_name.value='';
            input_price.value='';
            input_taxes.value='';
            input_kind.value='';
            input_count.value='';
            sectionMainPage.classList.add("hidden");
            optionpage.classList.add("hidden");
            sectionAddProduct.classList.add("hidden");
            sectionSeeAllProduct.classList.add("hidden");
            sectionsearchByName.classList.remove("hidden");
            inp_count.classList.remove("hidden");
            localStorage.page=5;
            pageTitle.innerHTML="search By Name";
            button_create.innerHTML="Create";
            showProducts();
            if(localStorage.summeries_products != undefined)
            {
                array_summeri=JSON.parse(localStorage.summeries_products);
            }
            show_products_in_Table2();
            show_products_in_Table();
            show_in_search_after_delete();
        }
        else
        {
            done_faild.classList.remove("hidden");
            faild.classList.remove("hidden");
            setTimeout(()=>{
                faild.classList.add("hidden");
            },1000);
            if(input_name.value.length < 3)
            {
                done_faild.classList.remove("hidden");
                wrong_name.classList.remove("hidden");
            }else{
                done_faild.classList.remove("hidden");
                done_name.classList.remove("hidden");
            }
            if(input_price.value.length == 0)
            {
                done_faild.classList.remove("hidden");
                wrong_price.classList.remove("hidden");
            }else{
                done_faild.classList.remove("hidden");
                done_price.classList.remove("hidden");
            }
            done_faild.classList.remove("hidden");
            done_taxes.classList.remove("hidden");
            if(input_kind.value.length < 3)
            {
                done_faild.classList.remove("hidden");
                wrong_kind.classList.remove("hidden");
            }else{
                done_faild.classList.remove("hidden");
                done_kind.classList.remove("hidden");
            }
            done_faild.classList.remove("hidden");
            done_count.classList.remove("hidden");
        }
    }
}
function deleteElement(parameter) {
    arr_allProducts.splice(parameter,1);
    localStorage.products = JSON.stringify(arr_allProducts);
    showProducts();
    if(localStorage.summeries_products != undefined)
    {
        array_summeri=JSON.parse(localStorage.summeries_products);
    }
    show_products_in_Table2();
    show_products_in_Table();
}
function updateElement(parameter) {
    inp_count.classList.add("hidden");
    to_down_update=window.scrollY;
    sectionAddProduct.classList.remove("hidden");
    sectionMainPage.classList.add("hidden");
    optionpage.classList.add("hidden");
    sectionSeeAllProduct.classList.add("hidden");
    sectionsearchByName.classList.add("hidden");
    pageTitle.innerHTML="update Product";
    localStorage.page=2;
    button_create.innerHTML="Update";
    let result;
    if(input_taxes.value.length == 0)
    {
        result=parseInt(input_price.value) + 0;
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0)
    {
        result = 0 + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }
    if(input_price.value.length == 0 && input_taxes.value.length == 0)
    {
        total_p.innerHTML="Total: ";
    }
    if(input_taxes.value.length > 0 && input_price.value.length > 0)
    {
        result=parseInt(input_price.value) + parseInt(input_taxes.value);
        total_p.innerHTML=`Total: ${result}`;
    }
    input_name.value=arr_allProducts[parameter].name;
    input_price.value=arr_allProducts[parameter].price;
    input_taxes.value=arr_allProducts[parameter].taxes;
    input_kind.value=arr_allProducts[parameter].kind;S
    index_to_update=parameter;
    if(localStorage.summeries_products != undefined)
    {
        array_summeri=JSON.parse(localStorage.summeries_products);
    }
    show_products_in_Table2();
    show_products_in_Table();
}
showProducts();
function show_products_in_Table2() {
    let table='';
    let name_to_table='';
    let price_to_table='';
    let kind_to_table='';
    let taxes_to_table='';
    let arr_name_taken=[];
    let counter=0;
    let flag=true;
    for(let i=0;i<arr_allProducts.length;i++)
    {
        flag=true;
        name_to_table=arr_allProducts[i].name;
        price_to_table=arr_allProducts[i].price;
        kind_to_table=arr_allProducts[i].kind;
        taxes_to_table=arr_allProducts[i].taxes;
        counter=0;
        for(let k=0;k<arr_name_taken.length;k++){
            if(name_to_table == arr_name_taken[k].name && price_to_table == arr_name_taken[k].price && kind_to_table == arr_name_taken[k].kind && taxes_to_table == arr_name_taken[k].taxes)
            {
                flag=false;
                break;
            }
        }
        if(flag == true)
        {
        for(let j=0;j<arr_allProducts.length;j++)
        {
            if(name_to_table == arr_allProducts[j].name && price_to_table == arr_allProducts[j].price && kind_to_table == arr_allProducts[j].kind && taxes_to_table == arr_allProducts[j].taxes)
            {
                counter++;
            }
            if(j == arr_allProducts.length - 1)
            {
                let varia={
                    name:name_to_table,
                    kind:arr_allProducts[i].kind,
                    price:arr_allProducts[i].price,
                    taxes:arr_allProducts[i].taxes,
                    total_price:arr_allProducts[i].totalPrice,
                    count:counter,
                }
                arr_name_taken.push(varia);
            }
        }
        }
    }
    localStorage.summeries_products=JSON.stringify(arr_name_taken);
    show_products_in_Table();
}
function show_products_in_Table() {
    let table='';
    for(let i=0;i<array_summeri.length;i++)
    {
        table += 
        `
        <tr>
            <td>${array_summeri[i].name}</td>
            <td>${array_summeri[i].kind}</td>
            <td>${array_summeri[i].price}</td>
            <td>${array_summeri[i].taxes}</td>
            <td>${array_summeri[i].total_price}</td>
            <td>${array_summeri[i].count}</td>
        </tr>
        `
    }
    table_body.innerHTML = table;
}
show_products_in_Table2();
show_products_in_Table();

function show_data_in_search_page() {
    let j=1;
    let product='';
    for(let i=0;i<arr_allProducts.length;i++){
        product += 
        `
        <div class="data455">
            <div><p>${arr_allProducts[i].name}</p></div>
            <div><p>${arr_allProducts[i].kind}</p></div>
            <div><p>${arr_allProducts[i].price}</p></div>
            <div><p>${arr_allProducts[i].taxes}</p></div>
            <div><p>${arr_allProducts[i].totalPrice}</p></div>
            <div><p><button>Delete</button></p></div>
            <div><p><button>Update</button></p></div>
        </div>
        `;
    }
    data454.innerHTML = product;
}
show_data_in_search_page();
function show_in_search_after_delete(){
    let product='';
    for(let i=0;i<arr_allProducts.length;i++){
        if( arr_allProducts[i].name.includes(input_search_by_name.value) )
        {
            product += 
            `
            <div class="data455">
            <div><p>${arr_allProducts[i].name}</p></div>
            <div><p>${arr_allProducts[i].kind}</p></div>
            <div><p>${arr_allProducts[i].price}</p></div>
            <div><p>${arr_allProducts[i].taxes}</p></div>
            <div><p>${arr_allProducts[i].totalPrice}</p></div>
            <div><p><button onclick="delete_in_search(${i})">Delete</button></p></div>
            <div><p><button onclick="update_in_search(${i})">Update</button></p></div>
        </div>
            `;
        }
    }
    data454.innerHTML = product;
}
input_search_by_name.onkeyup = function() {
    let product='';
    for(let i=0;i<arr_allProducts.length;i++){
        if( arr_allProducts[i].name.includes(input_search_by_name.value) )
        {
            product += 
            `
        <div class="data455">
            <div><p>${arr_allProducts[i].name}</p></div>
            <div><p>${arr_allProducts[i].kind}</p></div>
            <div><p>${arr_allProducts[i].price}</p></div>
            <div><p>${arr_allProducts[i].taxes}</p></div>
            <div><p>${arr_allProducts[i].totalPrice}</p></div>
            <div><p><button onclick="delete_in_search(${i})">Delete</button></p></div>
            <div><p><button onclick="update_in_search(${i})">Update</button></p></div>
        </div>
            `;
        }
    }
    data454.innerHTML = product;
}
function delete_in_search(parameter) {
    arr_allProducts.splice(parameter,1);
    arr_allProducts.splice(parameter,1);
    localStorage.products = JSON.stringify(arr_allProducts);
    show_in_search_after_delete();
    showProducts();
    show_products_in_Table2();
    show_products_in_Table();
    if(localStorage.summeries_products != undefined)
    {
        array_summeri=JSON.parse(localStorage.summeries_products);
    }
    show_products_in_Table2();
    show_products_in_Table();
}
function update_in_search(parameter) {
    sectionAddProduct.classList.remove("hidden");
    sectionMainPage.classList.add("hidden");
    optionpage.classList.add("hidden");
    sectionSeeAllProduct.classList.add("hidden");
    sectionsearchByName.classList.add("hidden");
    pageTitle.innerHTML="Update Product";
    localStorage.page=2;
    button_create.innerHTML="update";
    input_name.value=arr_allProducts[parameter].name;
    input_price.value=arr_allProducts[parameter].price;
    input_taxes.value=arr_allProducts[parameter].taxes;
    input_kind.value=arr_allProducts[parameter].kind;
    total_p.innerHTML=`Total: ${arr_allProducts[parameter].totalPrice}`;
    inp_count.classList.add("hidden");
    index_to_update=parameter;
    if(localStorage.summeries_products != undefined)
    {
        array_summeri=JSON.parse(localStorage.summeries_products);
    }
    show_products_in_Table2();
    show_products_in_Table();
}