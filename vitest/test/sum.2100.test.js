
import sum2100 from '../sum2100.js';
import { expect, test } from 'vitest';

test('adds 10 + 95 to equal 105 + offset 0.8284497534934515', () => {
  expect(sum2100(10, 95)).toBe(105 + 0.8284497534934515);
});
