FROM node:13-slim
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]