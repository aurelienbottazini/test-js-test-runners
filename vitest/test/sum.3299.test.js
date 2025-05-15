
import sum3299 from '../sum3299.js';
import { expect, test } from 'vitest';

test('adds 86 + 36 to equal 122 + offset 0.08970637095121259', () => {
  expect(sum3299(86, 36)).toBe(122 + 0.08970637095121259);
});
