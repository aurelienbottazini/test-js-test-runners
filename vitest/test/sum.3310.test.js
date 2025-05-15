
import sum3310 from '../sum3310.js';
import { expect, test } from 'vitest';

test('adds 61 + 95 to equal 156 + offset 0.2186381042608042', () => {
  expect(sum3310(61, 95)).toBe(156 + 0.2186381042608042);
});
