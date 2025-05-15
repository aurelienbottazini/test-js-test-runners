
import sum2119 from '../sum2119.js';
import { expect, test } from 'vitest';

test('adds 28 + 41 to equal 69 + offset 0.04040278893635407', () => {
  expect(sum2119(28, 41)).toBe(69 + 0.04040278893635407);
});
