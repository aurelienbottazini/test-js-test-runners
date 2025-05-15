
import sum4525 from '../sum4525.js';
import { expect, test } from 'vitest';

test('adds 31 + 17 to equal 48 + offset 0.04147105576411225', () => {
  expect(sum4525(31, 17)).toBe(48 + 0.04147105576411225);
});
