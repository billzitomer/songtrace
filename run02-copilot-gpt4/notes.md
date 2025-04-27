# Run 02 - Copilot + GPT4

Focus on producing design documents without generating code. Output to include design docs and architecture diagrams in C4 format. Also list technologies with pros/cons. And lastly, can it generate the prompts needed to generate the app?

First run it says it can't do it. There is a workspace command in the results and a link to "run without workspace". Clicking produced the design.

It generated the app design and technology options. It only include text description for the architecure diagrams. I asked it to save as files and it created two files with the architecture as part of the design doc. Next I told it explicitly to generate C4 diagrams using PlantUML format and save as .puml files. It obliged.

I'm having to create/save each file manually which is tedious.

Next I told it to generate the AI prompts to create the app. It did, however it went into an infinite loop regenerating them. After a minute or two I typed "stop" and it did. Scrolling back through the session is a little funky now, there is some blank space that jumps around. Will be interesting to see how it exports the session. 

I tried to run the entire 7 prompts, then just the first one. It just says "Sorry, I can't assist with that." Maybe it's tired, I will try again later. I also need to work on my prompting skills. 