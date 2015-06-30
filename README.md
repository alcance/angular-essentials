
# AngularJS Essentials


# @name: angessentials

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Install

Run `bower install`
Run `npm install`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


## The ngBind directive

The ngBind directive is generally applied to a span element and replaces the content
of the element with the results of the provided expression. It has the same meaning
as that of the double curly markup, for example, {{expression}}.

Why would anyone like to use this directive when a less verbose alternative is
available? This is because when the page is being compiled, there is a moment
when the raw state of the expressions is shown. Since the directive is defined by the
attribute of the element, it is invisible to the user. We will learn these expressions in
Chapter 3, Data Handling. The following is an example of the ngBind directive usage:


## The ngBindHtml directive

Sometimes, it might be necessary to bind a string of raw HTML. In this case, the gBindHtml directive can be used in the same way as ngBind; however, the only difference will be that it does not escape the content, which allows the browser to interpret it as shown.

In order to use this directive, we will need the angular-sanitize.js dependency.
It brings the ngBindHtml directive and protects the application against common cross-site scripting (XSS) attacks.


## The ngRepeat directive

The ngRepeat directive is really useful to iterate over arrays and objects. It can be
used with any kind of element such as the rows of a table, the elements of a list, and
even the options of select.
We must provide a special repeat expression that describes the array to iterate over
the variable that will hold each item in the iteration. The most basic expression
format allows us to iterate over an array, attributing each element to a variable:
variable in array


## The ngModel directive

The ngModel directive attaches the element to a property in the scope, thus binding
the view to the model. In this case, the element can be input (all types), select, or textarea

There is an important piece of advice regarding the use of this directive. We must
pay attention to the purpose of the field that is using the ngModel directive. Every time the field is a part of the construction of an object, we must declare the object
in which the property should be attached. In this case, the object that is being
constructed is a car; so, we will use car.plate inside the directive expression.

However, sometimes it may so happen that there is an input field that is just used to
change a flag, allowing the control of the state of a dialog or another UI component.

In this case, we can use the ngModel directive without any object as long as it will not
be used together with other properties or even persisted.


## The ngClick directive and other event
directives

The ngClick directive is one of the most useful kinds of directives in the framework.
It allows you to bind any custom behavior to the click event of the element.


## The ngDisable directive

The ngDisable directive can disable elements based on the Boolean value of an expression.


## The ngClass directive

The ngClass directive is used every time you need to dynamically apply a class to an element by providing the name of the class in a data-binding expression.


## The ngOptions directive

The ngRepeat directive can be used to create the options of a select element; However, there is a much more recommended directive that should be used for this purpose—the ngOptions directive.

Through an expression, we need to indicate the property of the scope from which the directive will iterate, the name of the temporary variable that will hold the content of each loop's iteration, and the property of the variable that should be displayed.



## The ngStyle directive

The ngStyle directive is used to supply the dynamic style configuration demand.
It follows the same concept used with the ngClass directive; however, here we can directly use the style properties and its values.


## The ngShow and ngHide directives

The ngShow directive changes the visibility of an element based on its display property.


## The ngIf directive

The nglf directive could be used in the same way as the ngShow directive; however, while the ngShow directive just deals with the visibility of the element, the ngIf directive prevents the rendering of an element in our template.


## The ngInclude directive

AngularJS provides a way to include other external HTML fragments in our pages.
The ngInclude directive allows the fragmentation and reuse of the application layout and is an important concept to explore


## Creating our own directives

Now that we have already studied a bunch of built-in directives of a framework, it's time to create our own reusable components! First, we need to know how to register a new directive into our module.

Basically, it's the same process that we use for the controller; however, the directives require the creation of something called Directive Definition Object that will be
used to configure the directive's behavior.

### template

Imagine the number of times you have had the same snippet of the HTML code
repeated over your application code. In the following code snippet, we are going to
create a new directive with the code to reuse


### templateUrl

There is another way to achieve the same goal with more quality. We just need
to move the HTML snippet to an isolated file and bind it using the templateUrl property.


### replace

Sometimes it might be interesting to discard the original element, where the directive
was attached, replacing it by the directive's template. This can be done by enabling
the replace property





