
import sum752 from '../sum752.js';
import { expect, test } from 'vitest';

test('adds 59 + 39 to equal 98 + offset 0.67968063038966', () => {
  expect(sum752(59, 39)).toBe(98 + 0.67968063038966);
});
