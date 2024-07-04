cross-platform mobile apps:
react native beneffit and used cases(structure and use)
core components : view text scrollview => primarily setting the visual layout of the app
rendering large list within the app & inputtting text via the keyboard
large and performant list by flatList sectionList
configure user input by keyboard using the textiInput
pressable components , rendering images , react native hooks
pressable => adding interactivity to the app
display and style images to the app
extend the functionality of react components
navigating between screen using react navigation

what is react native and motivation to use it ?
open-source javascript library based on react that is used to build cross-platform native mobile apps
build native ios android windows tv app using javascript and react
react components => wrap existing code to interact with apis
cross-platform apps => apps build with a single codebase for multiple platforms
cross-platform mobile frameworks
cross-platform developer
native
hybrid developer
speed of development
code base across platforms
ideas and code sharing
easy deployment

development setup :
npx create-expo-app --template blank {file name}
npm start
press a {emulator}

push code in the repository :
git clone {link} => copy the repository to the pc
git status
git commit -m 'identification'
git push origin main {branchname}
we can use expo snack as a react native id for development
benefits of react native ?

1. uses javascript
2. uses react
3. build cross-platform native apps
4. cose effectve
5. developer experience
   fast refresh
   easy debugging
   over-the-air-updates
   The React Native community is growing incredibly fast
   expo pros && cons
   pros : easy setup ,no ios/android code , built-in native apis
   cons: not all ios/android api included , poor integration of custom modules , large app size
   react native components ?
   react components:react native components({1.community components ,2.core components,3.your native components})
   components: basic building blocks
   split ui : independent reusable pieces
   view => basic building block of user interface => styling ,flexbox , touch handling ,accessibility controls
   text:styling ,nesting , touch handling
   scrollView : must be bounded by height
stylesheet api:
extract styles from the  component's render ,keeping all the style together
rendering large lists using flatlist component:
scrollable list
slow renderding
renders items lazily ,ideal for large lists => rendering as the items appears
upgrade the expo sdk:
npm install expo@latest
npm install expo@51
upgrade dependencies :
npx expo install --fix
rendering large lists by sections using sectionList