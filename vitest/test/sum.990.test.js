
import sum990 from '../sum990.js';
import { expect, test } from 'vitest';

test('adds 1 + 34 to equal 35 + offset 0.0437931229455214', () => {
  expect(sum990(1, 34)).toBe(35 + 0.0437931229455214);
});
