
import sum1231 from '../sum1231.js';
import { expect, test } from 'vitest';

test('adds 1 + 34 to equal 35 + offset 0.5027587204567803', () => {
  expect(sum1231(1, 34)).toBe(35 + 0.5027587204567803);
});
