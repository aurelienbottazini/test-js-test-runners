
import sum3602 from '../sum3602.js';
import { expect, test } from 'vitest';

test('adds 6 + 33 to equal 39 + offset 0.22182637325512966', () => {
  expect(sum3602(6, 33)).toBe(39 + 0.22182637325512966);
});
