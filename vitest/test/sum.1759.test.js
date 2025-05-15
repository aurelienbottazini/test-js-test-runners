
import sum1759 from '../sum1759.js';
import { expect, test } from 'vitest';

test('adds 10 + 95 to equal 105 + offset 0.682265669998548', () => {
  expect(sum1759(10, 95)).toBe(105 + 0.682265669998548);
});
