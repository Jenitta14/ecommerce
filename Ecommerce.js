let invoice = () => {
    let file = document.getElementById("imgide").files[0];
    let r = new FileReader();
    r.readAsDataURL(file)
    r.onload = function () {
        document.getElementById("imageid").src = r.result;
    }

    let stockitem = document.getElementById("stockitem").value
    let quantity = document.getElementById("quantity").value
    let rate = document.getElementById("rate").value
    let amount = document.getElementById("amount").value = quantity * rate;

    document.getElementById("tblbody").innerHTML =
        `<tr><td>${stockitem}</td>
        <td><img id="imageid" src = ${r.result} height="150px" width="150px"/>
        </td><td>${quantity}</td><td>${rate}</td><td>${amount}</td></tr>`

    document.getElementById("stockitem").value = ""
    document.getElementById("quantity").value = ""
    document.getElementById("imageid").value = ""
    document.getElementById("rate").value = ""
    document.getElementById("amount").value = "";
}
document.getElementById("imgbtn").addEventListener("click", invoice)