function AddData() {
    var rows = "";
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var PhoneNumber = document.getElementById("PhoneNumber").value.replace(/(\d{3})(\d{3})(\d{4})/, '$1$2$3');
    var ReceiverName = document.getElementById("ReceiverName").value;
    var amount = document.getElementById("amount").value;
    var Dates = document.getElementById("Dates").value;
    
    
    
    var Active = document.querySelector('input[name="Active"]:checked');
    Active = Active ? Active.value : '';
    
    rows += "<td>" + Name + "</td><td>" + Email + "</td><td>" + PhoneNumber + "</td><td>" + ReceiverName + "</td><td>" + amount + "</td><td>" + Dates;
    var tbody = document.querySelector("#list tbody");
    var tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr)

}

function UpdateForm() {

    $('span.glyphicon glyphicon-pencil').click(function() {
        //! Don't know what do here
    });

}

function ResetForm() {
    document.getElementById("person").reset();
}