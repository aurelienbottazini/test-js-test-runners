
import sum2776 from '../sum2776.js';
import { expect, test } from 'vitest';

test('adds 21 + 10 to equal 31 + offset 0.9772990747988893', () => {
  expect(sum2776(21, 10)).toBe(31 + 0.9772990747988893);
});
