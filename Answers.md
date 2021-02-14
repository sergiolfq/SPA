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
