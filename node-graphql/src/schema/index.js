import { importSchema } from 'graphql-import';
import path from 'path';

const typeDefs = importSchema(path.join(__dirname, './schema.graphql'));

export default [typeDefs];

// To extends type please use below code :
// import gql from 'graphql-tag';
// const extendTypes = gql``;