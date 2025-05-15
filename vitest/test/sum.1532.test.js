
import sum1532 from '../sum1532.js';
import { expect, test } from 'vitest';

test('adds 66 + 63 to equal 129 + offset 0.561196389806972', () => {
  expect(sum1532(66, 63)).toBe(129 + 0.561196389806972);
});
