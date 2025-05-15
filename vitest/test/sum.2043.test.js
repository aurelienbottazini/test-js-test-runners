
import sum2043 from '../sum2043.js';
import { expect, test } from 'vitest';

test('adds 69 + 91 to equal 160 + offset 0.5643578511265684', () => {
  expect(sum2043(69, 91)).toBe(160 + 0.5643578511265684);
});
