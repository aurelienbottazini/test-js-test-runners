
import sum3928 from '../sum3928.js';
import { expect, test } from 'vitest';

test('adds 3 + 77 to equal 80 + offset 0.7159315917103823', () => {
  expect(sum3928(3, 77)).toBe(80 + 0.7159315917103823);
});
