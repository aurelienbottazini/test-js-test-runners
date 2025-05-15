
import sum4628 from '../sum4628.js';
import { expect, test } from 'vitest';

test('adds 21 + 97 to equal 118 + offset 0.5405389388506824', () => {
  expect(sum4628(21, 97)).toBe(118 + 0.5405389388506824);
});
