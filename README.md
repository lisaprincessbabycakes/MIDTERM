## WEEK 1
## What book, album or movie did you choose? What is it about?

For this mid-term project, I wanted to pick Katy Perry's Witness album because (im a huge katycat fan) and that i could see some potential ideas I could explore. The album contains themes of self-awareness, empowerment, and vulnerability, blending electronic pop with personal reflection. A lot of the visuals are futurtistic and abstracts - which makes it a great opportunity fort dynamic and interactive design. 

[![download-1.jpg](https://i.postimg.cc/4xZkQB4z/download-1.jpg)](https://postimg.cc/Wh9H2mk3)

## What aspect of the album will you include in your cover?

I wanna focus on the futuristic and tech-inspired visuals, as well as the idea of "witnessing" personal transformation. I can take inspiration from the album cover. 

## Is it interactive? time-based? both?

As ambitious as it sounds, I kinda want try to incoporate both elements of interactivity and time-based. 

- Eyes as motifs - This is a recurring symbol in witness album. I could potentionally design a interactive cover where the user and "open" or "close" eyes. 
- emotional shifts - the design could react to mouse movements or clicks, with different parts of the cover changing in intensity or color, representing the emotional highs and lows in the album.
- changing colors - over time, the cover could shift between bright, vibrant colors (representing empowerment) and darker tones (representing vulnerability), mimicking the emotional journey in the album.


## What ideas would you like to explore or experiment with?

i wanna explore the futuristic aesthetic... maybe i could use sleek, modern shapes or digital glitches to give the cover a futuristic feel that reflects the electronic sound and themes of Witness.

I think the symbolism of the eyes would be a fun to explore, like i could play with the concept of eyes watching or being watched. Maybe the design becomes more intricate or abstract the longer the user interacts with it?

## Are there aspects of your project that are related to any of the readings we’ve done?

perhaps I could draw some inspo from Yoko Ono's Grapefruit for this project, especially with how grapefruit uses simple, poetic instructions to evoke larger meanings and emotions, which might translate beautifully into interactive or time-sensitive elements for my album cover project. Sometimes i gotta remind myself that less is more. 

minmalist interaction and surreal simple visuals are things i can bring into my design process. for an example, the design could start as something simple and blank, with interactions or time will cause subtle changes— like fading shapes, colors, or symbols that represent key themes from the Witness. the cover also could change over time without direct interaction, symbolizing the slow transformation present in both Witness - could be represented by shifts in colors, fading effects, or animated loops, capturing the concept of witnessing personal growth.

or i could look at abstraction when it comes to simplicity - such as shapes that don’t follow typical logic but could represent deeper emotions or concepts in a playful way.

## Include at least one drawing or sketch¸xasdcfvc

[![Untitled-Artwork-3.jpg](https://i.postimg.cc/zBjVq0D5/Untitled-Artwork-3.jpg)](https://postimg.cc/FdY9ZbJn)


## WEEK 2

Getting this code to work was a mix of patience and learning how each element interacted on the canvas. I started with a rough structure to build the facial features but quickly realized that positioning and layering would need more control. For example, the eyelashes kept shifting out of place because I hadn’t isolated each set, so I used `push()` and `pop()` to manage the transformations separately.

The biggest “aha” moment was realizing that `mousePressed()` needed to be outside the `draw()` function to toggle the eye correctly and randomize the iris color on each click. Adding the `if (eyeOpen)` condition allowed me to control when the eye appeared, creating the effect of it opening and closing interactively.

Through trial and error, I saw how details like layer order, transformations, and random color generation could all combine to bring a simple sketch to life on the screen. It was rewarding to see it finally come together with symmetry, interactivity, and just the right level of quirkiness!

[![Screenshot-2024-10-28-at-11-01-34-AM.png](https://i.postimg.cc/8PszZ5JK/Screenshot-2024-10-28-at-11-01-34-AM.png)](https://postimg.cc/HVDmxTtX)

[![Screenshot-2024-10-28-at-3-30-05-PM.png](https://i.postimg.cc/pdkNNf3D/Screenshot-2024-10-28-at-3-30-05-PM.png)](https://postimg.cc/GBBgGyL2)

Visual elements: 
1. Gradual background color change over time  - BgColor 
2. Face shape - large oval centered in canvas 
3. Eyebrows - two arcs 
4. Blush - two pink circles 
5. Mouth with eye inside - organic mouth shape 
6. Interactive eye - when the mouse is clicked, the eye toggles open/close and the iris color changes randomly

Setting up variables - eyeOpen, eyeColor, BgColor
— animated aspects 
- eyeOpen is a boolean that keeps track of whether the eye is open/closed
- eyeColor - color of iris 
- BgColor - background color that changes over time. 

# Milestone 3

Building on the feedback I received last week, I chose to intensify the eye symbolism and interactive elements in my project by filling the background canvas with additional eyeballs. My goal was to create a more immersive experience, enhancing both the visual impact and interactivity. Since I already had a mouse-click interaction that triggers the blinking eye within the main face element, I faced some challenges when adding a new mouse-click event specifically for the background. I initially envisioned each click leaving an eyeball on the canvas, symbolizing lingering "witnesses" wherever the user interacted.

After experimenting with the click-based interactions, I realized that triggering multiple functions through mouse clicks was causing interference between them. To address this, I decided to leverage mouseDragged instead. This adjustment allowed me to create a continuous "eyeball trail" effect, where eyeballs follow the user's cursor as they move across the canvas. The result is a dynamic and captivating interaction that enriches the symbolic presence of the eyes while seamlessly blending with the blinking effect already in place.

## Description of the final interactivity or time-based logic
- The final interactivity design is an evolving visual experience that is centered on the concept of observation and surveillance (with the eyeball being the symbolic element of the album). The canvas background subtly shifts colors over time to reflecting a sense of continues transformation in emotional fluidity. The main eye (in the mouth) blinks and changes colors when clicked, emphasizing the themes of surveillance and emotional response. Each time the user clicks, the eye closes briefly, then opens with a new, randomized color, symbolizing a refreshed gaze. As the user moves the cursor across the canvas, the mouseDragged function leaves a trail of eyeballs behind, representing a lingering sense of being "witnessed" by the viewer's actions. These eyeballs remain on the canvas, creating a cumulative effect that marks each interaction, as if every movement leaves a lasting impression. This trail, combined with the blinking eye, builds a symbolic narrative where the user becomes both the observer and the observed.Overall, the combination of timed color shifts, blinking eye interactions, and persistent eyeball trails makes the experience both interactive and time-based. 

[![Screenshot-2024-11-03-at-1-21-16-PM.png](https://i.postimg.cc/FF6crNDd/Screenshot-2024-11-03-at-1-21-16-PM.png)](https://postimg.cc/grvr4F9m)

[Screenshot-2024-11-03-at-12-48-37-PM.png](https://postimg.cc/18KpdnLR)