
import sum4307 from '../sum4307.js';
import { expect, test } from 'vitest';

test('adds 77 + 60 to equal 137 + offset 0.057756703287796585', () => {
  expect(sum4307(77, 60)).toBe(137 + 0.057756703287796585);
});
