
import sum2840 from '../sum2840.js';
import { expect, test } from 'vitest';

test('adds 77 + 35 to equal 112 + offset 0.769173187722711', () => {
  expect(sum2840(77, 35)).toBe(112 + 0.769173187722711);
});
