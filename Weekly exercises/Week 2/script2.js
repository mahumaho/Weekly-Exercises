$(document).ready(function () {
    $("#Toggle").click(function () {
        $("#demo").toggle("slow", function () {
            alert("done");
        });

    });
    $("#FadeIn").click(function () {
        $("#demo").fadeIn("slow");
    });
    $("#enlarge").click(function () {
        $("#demo").animate({width: "250px"});
    });
    $("#slide").click(function () {
        $("#forslide").slideDown(2000).slideUp(2000).slideDown(2000)
    });
    $("#changeTextValue").click(function () {
        currentText = $("#changeTextHere").text();
        alert("Current text: " + currentText);
        $("#changeTextHere").text("Hello Max");
        currentValue = $("#changeValueHere").val();
        alert("Current value: " + currentValue);
        $("#changeValueHere").val("Hello Howe");
    });

    $("#addHTMLToTable").click(function () {
        alert($("#demoTable").html());
        $("#demoTable").html("<tr><td>Max Howe</td><td>26</td><td>Male</td>"
            + "<tr><td>Max Howe</td><td>26</td><td>Male</td>")
    });

    $("#showAttrOfTable").click(function () {
        alert($("#demoTable").attr("price"));
        alert($("#demoTable").attr("age"));
        alert($("#demoTable").attr("attr1"));
    })

    $("#appendBtn").click(function () {
        $("#demoTable").append("<tr><td>Max Howe</td><td>26</td><td>Male</td>");
    });
    $("#prepend_button").click(function () {
    $("#demoTable").prepend("<tr><td>Max Howe</td><td>26</td><td>Male</td>");
    });

    $("#addBeforeHeading").click(function () {
        $("#tableHeading").before("<tr><td>Max Howe</td><td>26</td><td>Male</td></tr>");
    });
    $("#addAfterHeading").click(function () {
        $("#tableHeading").after("<tr><td>Max Howe</td><td>26</td><td>Male</td></tr>");
    });
    $("#removeHeading").click(function () {
        $("#tableHeading").remove();
    });
    $("#emptyTable").click(function () {
        $("#demoTable").empty();
    });
    $("#addClass").click(function () {
        $("#demoTable").toggleClass("table1");
        });
});