import Anthropic from '@anthropic-ai/bedrock-sdk';
import dotenv from 'dotenv';

dotenv.config();

export const anthropic = new Anthropic({
  awsRegion: 'us-west-2',
});
