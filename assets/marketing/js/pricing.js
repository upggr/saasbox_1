/*
 * 
 * This file detects the current url path
 *
 * It finds the pricing link element with the same href.
 * 
 * It then removes the non-select button classes, and adds select button classes.
 *
 */ 

// Get path
let paths = window.location.pathname;

// Find link with matching path. Search only links under sidebar and sidebar mobile. Otherwise we color other links.
let monthly = $("#pricing-tabs").find('a[href="/pricing"]');
let yearly = $("#pricing-tabs").find('a[href="/pricing-yearly"]');

if (paths == "/pricing") {
	monthly.removeClass("text-gray-500 hover_text-gray-900 font-bold ")
	monthly.addClass("text-white bg-green-600 rounded-lg shadow-mf font-bold");
	yearly.removeClass("text-white bg-green-600 rounded-lg shadow-mf font-bold");
	yearly.addClass("text-gray-500 hover_text-gray-900 font-bold")
} else if (paths == "/pricing-yearly") {
	yearly.removeClass("text-gray-500 hover_text-gray-900 font-bold ")
	yearly.addClass("text-white bg-green-600 rounded-lg shadow-mf font-bold");
	monthly.removeClass("text-white bg-green-600 rounded-lg shadow-mf font-bold");
	monthly.addClass("text-gray-500 hover_text-gray-900 font-bold ")
}
