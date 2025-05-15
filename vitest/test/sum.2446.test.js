
import sum2446 from '../sum2446.js';
import { expect, test } from 'vitest';

test('adds 63 + 17 to equal 80 + offset 0.7090029990248838', () => {
  expect(sum2446(63, 17)).toBe(80 + 0.7090029990248838);
});
