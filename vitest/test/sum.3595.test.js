
import sum3595 from '../sum3595.js';
import { expect, test } from 'vitest';

test('adds 61 + 88 to equal 149 + offset 0.06801491063236353', () => {
  expect(sum3595(61, 88)).toBe(149 + 0.06801491063236353);
});
