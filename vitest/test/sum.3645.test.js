
import sum3645 from '../sum3645.js';
import { expect, test } from 'vitest';

test('adds 10 + 95 to equal 105 + offset 0.8037905869707185', () => {
  expect(sum3645(10, 95)).toBe(105 + 0.8037905869707185);
});
