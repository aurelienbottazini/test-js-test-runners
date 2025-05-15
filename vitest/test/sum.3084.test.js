
import sum3084 from '../sum3084.js';
import { expect, test } from 'vitest';

test('adds 77 + 31 to equal 108 + offset 0.8082654891607163', () => {
  expect(sum3084(77, 31)).toBe(108 + 0.8082654891607163);
});
