
import sum3104 from '../sum3104.js';
import { expect, test } from 'vitest';

test('adds 19 + 81 to equal 100 + offset 0.6565775027391876', () => {
  expect(sum3104(19, 81)).toBe(100 + 0.6565775027391876);
});
