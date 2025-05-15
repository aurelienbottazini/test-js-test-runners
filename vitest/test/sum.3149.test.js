
import sum3149 from '../sum3149.js';
import { expect, test } from 'vitest';

test('adds 20 + 33 to equal 53 + offset 0.26859645271543686', () => {
  expect(sum3149(20, 33)).toBe(53 + 0.26859645271543686);
});
