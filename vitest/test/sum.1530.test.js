
import sum1530 from '../sum1530.js';
import { expect, test } from 'vitest';

test('adds 18 + 1 to equal 19 + offset 0.792425140860246', () => {
  expect(sum1530(18, 1)).toBe(19 + 0.792425140860246);
});
