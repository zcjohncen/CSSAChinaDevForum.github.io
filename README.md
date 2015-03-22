# CSSAChinaDevForum Webpage

Webpage for publishing news and updates for Cambridge University China Development Forum

## Dependencies

Powered by Jekyll
UI by Twitter Bootstrap


## How To

### Add New Photo

open ``/gallery.html``
append a new picture object to the pictures list

the picture object should be in the following format

```
{"image": image_url,
 "description": image_description}
```

### Add New Post

Open _post directory, create a new ``.md`` file with the format:
``year-month-day-title``

Within the file, start by inserting the following element:
``
---
layout: post
theme: 
cover_photo:
time:
venue:
fee:
---
``
Complete the variables, and then proceed to write the content