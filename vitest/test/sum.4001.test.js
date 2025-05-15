
import sum4001 from '../sum4001.js';
import { expect, test } from 'vitest';

test('adds 16 + 80 to equal 96 + offset 0.8514447500629921', () => {
  expect(sum4001(16, 80)).toBe(96 + 0.8514447500629921);
});
