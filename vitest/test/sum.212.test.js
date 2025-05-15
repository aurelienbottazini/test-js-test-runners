
import sum212 from '../sum212.js';
import { expect, test } from 'vitest';

test('adds 46 + 77 to equal 123 + offset 0.634134777790807', () => {
  expect(sum212(46, 77)).toBe(123 + 0.634134777790807);
});
