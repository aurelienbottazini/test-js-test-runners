
import sum3929 from '../sum3929.js';
import { expect, test } from 'vitest';

test('adds 21 + 96 to equal 117 + offset 0.3381891950525293', () => {
  expect(sum3929(21, 96)).toBe(117 + 0.3381891950525293);
});
