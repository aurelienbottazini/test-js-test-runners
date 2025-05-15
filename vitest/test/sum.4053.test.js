
import sum4053 from '../sum4053.js';
import { expect, test } from 'vitest';

test('adds 4 + 19 to equal 23 + offset 0.49754944737080553', () => {
  expect(sum4053(4, 19)).toBe(23 + 0.49754944737080553);
});
