
import sum2982 from '../sum2982.js';
import { expect, test } from 'vitest';

test('adds 68 + 84 to equal 152 + offset 0.1741758980865371', () => {
  expect(sum2982(68, 84)).toBe(152 + 0.1741758980865371);
});
