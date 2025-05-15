
import sum4613 from '../sum4613.js';
import { expect, test } from 'vitest';

test('adds 30 + 93 to equal 123 + offset 0.029810506166448314', () => {
  expect(sum4613(30, 93)).toBe(123 + 0.029810506166448314);
});
