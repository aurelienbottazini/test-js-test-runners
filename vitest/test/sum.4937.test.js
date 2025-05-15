
import sum4937 from '../sum4937.js';
import { expect, test } from 'vitest';

test('adds 75 + 25 to equal 100 + offset 0.9871143688297188', () => {
  expect(sum4937(75, 25)).toBe(100 + 0.9871143688297188);
});
