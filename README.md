# CSSAChinaDevForum Webpage

Webpage for publishing news and updates for Cambridge University China Development Forum

## Dependencies

1. Powered by Jekyll

2. UI by Twitter Bootstrap

3. Full-slider and clean-blog librariers from startbootstrap.com

4. Contact Form powered by formspree.io

## How To

### Edit Pages

The following are the correspondence between file and page

| Page        | File                 |
| ----------- | -------------------- |
| Home        | index.html           |
| The Forum   | about.html           |
| FORTHCOMING | upcoming_events.html |
| PAST EVENT  | past_events.html     |
| GALLERY     | gallery.html         |
| COMMITTEE   | committee.html       |
| CONTACT     | contact.html         |
| TICKET      | event_register       |


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

```
---
layout: post
theme: 
cover_photo:
time:
venue:
fee:
categories:
---
```

1. Add to **Past Event**:  set categories to past_event, set layout to old_post
2. Add to **Forthcoming Event** set categories to upcoming, set layout to post


Complete the variables, and then proceed to write the content