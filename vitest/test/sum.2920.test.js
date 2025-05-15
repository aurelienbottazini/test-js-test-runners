
import sum2920 from '../sum2920.js';
import { expect, test } from 'vitest';

test('adds 21 + 46 to equal 67 + offset 0.5095335008090275', () => {
  expect(sum2920(21, 46)).toBe(67 + 0.5095335008090275);
});
