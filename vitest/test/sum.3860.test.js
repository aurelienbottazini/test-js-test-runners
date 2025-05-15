
import sum3860 from '../sum3860.js';
import { expect, test } from 'vitest';

test('adds 7 + 31 to equal 38 + offset 0.21812945124661642', () => {
  expect(sum3860(7, 31)).toBe(38 + 0.21812945124661642);
});
