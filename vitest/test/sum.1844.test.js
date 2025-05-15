
import sum1844 from '../sum1844.js';
import { expect, test } from 'vitest';

test('adds 45 + 35 to equal 80 + offset 0.7796529448080312', () => {
  expect(sum1844(45, 35)).toBe(80 + 0.7796529448080312);
});
