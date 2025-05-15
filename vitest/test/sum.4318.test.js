
import sum4318 from '../sum4318.js';
import { expect, test } from 'vitest';

test('adds 35 + 93 to equal 128 + offset 0.43497179217580906', () => {
  expect(sum4318(35, 93)).toBe(128 + 0.43497179217580906);
});
