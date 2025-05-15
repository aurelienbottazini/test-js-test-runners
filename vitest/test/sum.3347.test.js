
import sum3347 from '../sum3347.js';
import { expect, test } from 'vitest';

test('adds 89 + 43 to equal 132 + offset 0.21597929417185446', () => {
  expect(sum3347(89, 43)).toBe(132 + 0.21597929417185446);
});
