
import sum1603 from '../sum1603.js';
import { expect, test } from 'vitest';

test('adds 1 + 22 to equal 23 + offset 0.5768781493525348', () => {
  expect(sum1603(1, 22)).toBe(23 + 0.5768781493525348);
});
