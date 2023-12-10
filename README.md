



##### STREET VIEW STATIC API DOCS (https://developers.google.com/maps/documentation/streetview/request-streetview)
- heading: 
- pitch: (default is 0) specifies the up or down angle of the camera relative to the Street View vehicle. This is often, but not always, flat horizontal. Positive values angle the camera up (with 90 degrees indicating straight up); negative values angle the camera down (with -90 indicating straight down).
- fov: 



##### STREET VIEW PANORAMA DOCS (https://developers.google.com/maps/documentation/urls/get-started#street-view-action)
Ex, https://www.google.com/maps/@?api=1&map_action=pano&parameters

- heading: Indicates the compass heading of the camera in degrees clockwise from North. Accepted values are from -180 to 360 degrees. If omitted, a default heading is chosen based on the viewpoint (if specified) of the query and the actual location of the image.
- pitch: Specifies the angle, up or down, of the camera. The pitch is specified in degrees from -90 to 90. Positive values will angle the camera up, while negative values will angle the camera down. The default pitch of 0 is set based on on the position of the camera when the image was captured. Because of this, a pitch of 0 is often, but not always, horizontal. For example, an image taken on a hill will likely exhibit a default pitch that is not horizontal.
- fov: Determines the horizontal field of view of the image. The field of view is expressed in degrees, with a range of 10 - 100. It defaults to 90. When dealing with a fixed-size viewport, the field of view is considered the zoom level, with smaller numbers indicating a higher level of zoom.


##### NEW GOOGLE MAPS LINK FORMAT
Ex, https://www.google.com/maps/@35.6934524,139.7344228,3a,73.9y,7.76h,85.87t/data=!3m6!1e1!3m4!1svBVErdzbPNOtYbPQAd57FA!2e0!7i16384!8i8192?entry=ttu

- @lat,lng
- h: heading, 0 = due north, 180 = due south, 359 = almost north
- t: pitch,  0 = looking down, 180 = looking up - NOTE, in the Street View Static API, the value range is -90 (looking straight down) to 90 (looking straight up)
- y: fov (zoom), 90 = most zoomed out, 15 = most zoomed in
- a: ??