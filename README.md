# ProcessWire Module "ImagePicker Field" #

## What it does

This is a simple ImagePicker.

It is basically a FieldtypeText with image preview and image picker.
This field does not return an image object, but an image URL.

If you need a reference to the original image, you can get it like this:

```
$MyImage=$page->getInputField('MyImagePicker')->getImage();
```

Please check for null before using the return value, because ImagePicker also allows exernal image URLs which do not reference an image object. 

## Installation
This installs three modules:

FieldtypeImagePicker, InputfieldImagePicker, ImagePickerList

Installing FieldtypeImagePicker will install the other modules too.


## Configuration Options

On the details tab of the field, you will find two options:

### Selectors
Here you can define processwire page selectors.

This will restrict the pages shown in the image picker.

Example: 
```
template=MediaLibrary
```

No checking is done. This is entirely up to you.

### Thumbnail width
Define the dimensions of the picker items.


## License

This module is released under the MIT License I think. IANAL. ;-)
