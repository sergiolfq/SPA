Answers from Test PHP 

## 1 

>Istrpos will return the first position where it matches and in this case it’s zero which will translate to false in the if comparison.
>I suggest the use the operator ===. in this case we make sure the position zero is not considered as false. 

the fixed code is this 

```php 
Fixed code: 
$str1 = 'yabadabadoo';
$str2 = 'yaba';
if (strpos($str1,$str2) === false ) {
echo "\"" . $str1 . "\" contains \"" . $str2 . "\"";
} else {
echo "\"" . $str1 . "\" does not contain \"" . $str2 . "\"";
}
```
## 2 

>Code Review :
>  *  this method in unnecessary as Laravel model includes methods to achieve this result. 
>  *To access UsersAttributes in Case there was a separate table for that, it should be access through the model relationship (Belongsto, HasMany) methods in user Model. 
>  * check first if the table UserAttribute exists, user attributes should be reach from it’s model. 
>  * I suggest in future search of specific records use the method find and pass the id.
>  * method push updates the models associated to the current object I think this implementation is not correct. 


## 3 
> what's wrong with second code explain: 
> nothing is wrong. I would recommend using other criteria for the conditional based on http verb like post
 
## 4
```php
$array_type['physical] =['license','physical']; 
$array_type['book'] = ['book','epub']; 
$array_type['creative'] =['song','artwork'];
$opType = $order->product->option->type;
$downloadable = true;

if( in_array($opType,$array_type['book'])  ){
   $type = 'book';        
}

if( in_array($opType, $array_type['creative'] ) ){
    $type = 'creative'; 
}

if( in_array($opType,$array_type['physical]){
	$type = $opType;
	if($type === 'physical'){
		$downloadable = false;	
	}
}
```
## 5 SOLID

> Some examples of solid : 
> - Single responsability 
> a class should have one and only one responsability: 
> it is important to create classes focused on one concern.


> - Open close principle 
> Classes must be open for extension close for modification
> In PHP we should make use of interface when necessary so we can consistently adapt method to new implementations according to the context. 

> - Liskov Substitution Principle
> Object should be replace with instances of their subtype without altering the correct functioning of their system. 
>in PHP this can be achieved by implementing interfaces and making basic implementation in classes that could be used to be extended and incorporate new functionalities. 

> - Interface Segregation Principles
> a client should not be forced to use an inte or method that doesn't need 
> in PHP we can build specific interfaces targeting to solve a specific need rather than making general methods that will not be used. 

> - Dependency Inversion System
> in Php One class should not depend on another class. It should only depend on an abstraction of this class. 
> a practical way to achieve this is to create an interface and make your controller recieve that interface instead of that class.  

## 6  

```php
$data = [
    [
    "name" => "Johnson Mauray",
    "email" => "johnson@email.com"
    ],
    [
    "name" => "BeeBee Love",
    "email" => "beebee@email.com"
    ],
    [
    "name" => "Alex Denis",
    "email" => "alex@email.com"
    ] 
];

foreach($data as &$client) {
	$names = explode(' ',$client['name']);
	$client['initials'] = strtoupper( substr($names[0],0,1).'.'. substr($names[1],0,1)  );
}

App\Client::insert($data);
```
## 7 

> see repo readme.md

## 8 
```php
for($i = 15; $i > 2; $i=$i-2){
    $line = "";
    $j = $i; 
    while( $j > 1 ){
     $line .= "*"; 
     $j--;
    }
    $line .= "<br/>"; 
    echo $line;   
}
```

