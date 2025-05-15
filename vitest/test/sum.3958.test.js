
import sum3958 from '../sum3958.js';
import { expect, test } from 'vitest';

test('adds 3 + 97 to equal 100 + offset 0.3073801678931284', () => {
  expect(sum3958(3, 97)).toBe(100 + 0.3073801678931284);
});
