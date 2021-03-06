$(document).ready(function () {
	window.addEventListener('mouseup',function(event){
		var zip_box = document.getElementById('zip_box');
		if(event.target != zip_box && event.target.parentNode != zip_box){
			$("#zip_validate").html('');
		}
	});  
	$("#zipcode").blur(function(){
		$("#zip_validate").html('');
	})

	var phones = [{
		"mask": "(###) ###-####"
	}, {
		"mask": "(###) ###-####"
	}];

	$('#phoneNumber_mask').inputmask({
		mask: phones,
		greedy: false,
		definitions: {
			'#': {
				validator: "[0-9]",
				cardinality: 1
			}
		}
	});

	$.validator.addMethod("EMAIL", function (value, element) {
		return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
	}, "Email Address is invalid");
	$("#landingmastep2Frm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingma5Frm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingmaDrFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote:function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function(error, element) {
			var name = $(element).attr("name");
			$("#" + name + "_validate").html('');
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#findaPlan1Frm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote:function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function(error, element) {
			var name = $(element).attr("name");
			$("#" + name + "_validate").html('');
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});
	$("#findaPlan2Frm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote:function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function(error, element) {
			var name = $(element).attr("name");
			$("#" + name + "_validate").html('');
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#demographicsFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: base_url + "checkzip"
			},
			phoneNumber_mask: {
				phoneUS: true
			},
			email: {
				email: true
			}
		},
		errorPlacement: function(error, element) {
			var name = $(element).attr("name");
			// if($("#" + name).val() !=""){
			$("." + name + "_validate").html('');
			error.appendTo($("." + name + "_validate"));
			// }
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			},
			phoneNumber: {
				phoneUS: "Please enter a valid Phone Number"
			},
			email: {
				email: "Please enter a valid email address"
			}
		}
	});

	$("#findaplanFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote:function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function(error, element) {
			var name = $(element).attr("name");
			$("#" + name + "_validate").html('');
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#callusFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote:function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function(error, element) {
			var name = $(element).attr("name");
			$("#" + name + "_validate").html('');
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#callnowFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote:function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function(error, element) {
			var name = $(element).attr("name");
			$("#" + name + "_validate").html('');
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "INVALID ZIP CODE",
				number: "INVALID ZIP CODE",
				maxlength: "INVALID ZIP CODE",
				minlength: "INVALID ZIP CODE",
				remote: "INVALID ZIP CODE"
			}
		}
	});

	$("#landingSearchFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote:function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function(error, element) {
			var name = $(element).attr("name");
			$("#" + name + "_validate").html('');
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});
	$("#landingmaDocFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: base_url + "checkzip"
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});
	$("#landingmaFrm2").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#medicareadvantageFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});
	
	$("#medicareadvantage2Frm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});
	
	$("#medicareadvantage3Frm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingmaFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  function()
						{
							return {
								async: false,
								url:  base_url + "checkzip"

							}
						}

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingrxFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingrxcompareFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingrxenrollFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingrxplanfinderFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingrxsearchFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingrxshopFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});


	$("#landingmacompareFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingmaenrollFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingmaplanfinderFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingmasearchFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});

	$("#landingmashopFrm").validate({
		errorElement: "label",
		errorClass: "error",
		onkeyup: false,
		rules: {
			zip: {
				required: true,
				number: true,
				maxlength: 5,
				minlength: 5,
				remote: function()
				{
					return {
						async: false,
						url:  base_url + "checkzip"

					}
				}
			}
		},
		errorPlacement: function (error, element) {
			var name = $(element).attr("name");
			error.appendTo($("#" + name + "_validate"));
		},
		messages: {
			zip: {
				required: "Please enter a valid ZIP Code",
				number: "Please enter a valid ZIP Code",
				maxlength: "Please enter a valid ZIP Code",
				minlength: "Please enter a valid ZIP Code",
				remote: "Please enter a valid ZIP Code"
			}
		}
	});


})


function frmCallnow(pdate) {
	if ($("#callnowFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = { zip: $('#zip').val() };
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function(data) {
				$("#zip_validate").html('');
				$("#staticBackdrop").modal();
			}
		});

	}
}

function frmFindaplan(pdate) {
	if ($("#findaplanFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = { zip: $('#zip').val() };
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function(data) {
				$("#zip_validate").html('');
				$("#staticBackdrop").modal();
			}
		});

	}
}

function frmCallus(pdate) {
	if ($("#callusFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = { zip: $('#zip').val() };
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function(data) {
				$("#zip_validate").html('');
				$("#staticBackdrop").modal();
			}
		});

	}
}

function frmLandingmaDr(pdate) {
	if ($("#landingmaDrFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = { zip: $('#zip').val() };
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function(data) {
				$("#zip_validate").html('');
				$("#landingmaDrFrm").submit();
			}
		});

	}
}
function frmFindaPlan1(pdate) {
	if ($("#findaPlan1Frm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = { zip: $('#zip').val() };
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function(data) {
				$("#zip_validate").html('');
				$("#staticBackdrop").modal();
			}
		});

	}
}

function frmFindaPlan2(pdate) {
	if ($("#findaPlan2Frm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = { zip: $('#zip').val() };
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function(data) {
				$("#zip_validate").html('');
				$("#staticBackdrop").modal();
			}
		});

	}
}

function frmLandingSearch(pdate) {
	if ($("#landingSearchFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = { zip: $('#zip').val() };
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function(data) {
				$("#zip_validate").html('');
				$("#staticBackdrop").modal();
			}
		});

	}
}

function frmLandingmaDoc() {
	if ($("#landingmaDocFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingma2() {
	if ($("#landingmaFrm2").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				$("#zip_validate").html('');
				returncounty();
				$("#landingmaFrm2").submit()
				//}
			}
		});
	}
}

function frmLandingmastep2() {
	if ($("#landingmastep2Frm").valid()) {
		document.getElementById('landingmastep2Frm').submit();
	}
}

function frmLandingma5() {
	if ($("#landingma5Frm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmMedicareadvantage() {
	if ($("#medicareadvantageFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmMedicareadvantage2() {
	if ($("#medicareadvantage2Frm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmMedicareadvantage3() {
	if ($("#medicareadvantage3Frm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingma() {
	if ($("#landingmaFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingrx() {
	if ($("#landingrxFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingrxcompare() {
	if ($("#landingrxcompareFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingrxenroll() {
	if ($("#landingrxenrollFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingrxplanfinder() {
	if ($("#landingrxplanfinderFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingrxsearch() {
	if ($("#landingrxsearchFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingrxshop() {
	if ($("#landingrxshopFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingmacompare() {
	if ($("#landingmacompareFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//	}
			}
		});
	}
}

function frmLandingmaenroll() {
	if ($("#landingmaenrollFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingmaplanfinder() {
	if ($("#landingmaplanfinderFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingmasearch() {
	if ($("#landingmasearchFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//}
			}
		});
	}
}

function frmLandingmashop() {
	if ($("#landingmashopFrm").valid()) {
		var ajaxurlzip = base_url + "checkzip";
		var alldatazip = {
			zip: $('#zip').val()
		};
		jQuery.ajax({
			type: "GET",
			url: ajaxurlzip,
			data: alldatazip,
			success: function (data) {
				//if (data == "true") {
				//document.getElementById("landingrxFrm").submit();
				$("#zip_validate").html('');
				returncounty();
				$('#staticBackdrop').modal();
				//	}
			}
		});
	}
}

function submitFrm(transferPage, frm) {
	var action = $("#" + frm).attr('action');
	$("#" + frm).attr('action',action+'/'+transferPage)
	$('#transferPage').val(transferPage);
	if ($("#" + frm).valid()) {
		document.getElementById(frm).submit();
	}
}

function setphone(val) {
	var string1 = val.replace(" ", "");
	var string2 = string1.replace("(", "");
	var string3 = string2.replace(")", "");
	var string4 = string3.replace("-", "");
	$("#phoneNumber").val(string4);
}

function frmDemographicsLander(){
	if ($("#demographicsFrm").valid()) {
		$("#demographicsFrm").submit();
	}
}

$(document).ready(function () {
	$('.medicare-glance-subblock .medicare-glance-main-block .link-block .link').on('click', function() {
		$(this).parent().siblings('.other-content').slideToggle();
		$(this).text($(this).text() == 'More Details' ? 'Show Less' : 'More Details');
	});
});