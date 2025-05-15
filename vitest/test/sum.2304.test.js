
import sum2304 from '../sum2304.js';
import { expect, test } from 'vitest';

test('adds 95 + 40 to equal 135 + offset 0.9842440374425986', () => {
  expect(sum2304(95, 40)).toBe(135 + 0.9842440374425986);
});
