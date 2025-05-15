
import sum1690 from '../sum1690.js';
import { expect, test } from 'vitest';

test('adds 28 + 67 to equal 95 + offset 0.09250640266238797', () => {
  expect(sum1690(28, 67)).toBe(95 + 0.09250640266238797);
});
