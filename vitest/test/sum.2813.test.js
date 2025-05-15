
import sum2813 from '../sum2813.js';
import { expect, test } from 'vitest';

test('adds 41 + 25 to equal 66 + offset 0.3870967976481079', () => {
  expect(sum2813(41, 25)).toBe(66 + 0.3870967976481079);
});
