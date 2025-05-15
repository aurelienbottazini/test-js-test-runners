
import sum3793 from '../sum3793.js';
import { expect, test } from 'vitest';

test('adds 21 + 90 to equal 111 + offset 0.98325886053586', () => {
  expect(sum3793(21, 90)).toBe(111 + 0.98325886053586);
});
