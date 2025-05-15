
import sum1712 from '../sum1712.js';
import { expect, test } from 'vitest';

test('adds 38 + 12 to equal 50 + offset 0.26547589863523224', () => {
  expect(sum1712(38, 12)).toBe(50 + 0.26547589863523224);
});
