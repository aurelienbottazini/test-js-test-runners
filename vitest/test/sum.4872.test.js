
import sum4872 from '../sum4872.js';
import { expect, test } from 'vitest';

test('adds 28 + 60 to equal 88 + offset 0.5793670717420968', () => {
  expect(sum4872(28, 60)).toBe(88 + 0.5793670717420968);
});
