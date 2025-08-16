# ts
setup node project 
  
  1. npm init -y   ( will create package.json file )
  
  2.     npm install --save-dev typescript @types/node  (Install TypeScript and Node.js Type Definitions:)
  
        it will create "devDependencies": {
    "@types/node": "^24.3.0",
    "typescript": "^5.9.2"
  }    in package.json and create package-lock.json
  
  3. Initialize TypeScript Configuration.
  
     npx tsc --init   (will create tsconfig.json)
	 
4.     npm install --save-dev ts-node  (If using ts-node for development, install it:)

5. "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "start": "node dist/index.js"
  },    .. update package.json

6. npm run build  -- compile
   npm start    -- run the compiled output