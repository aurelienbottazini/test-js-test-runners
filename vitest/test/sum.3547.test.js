
import sum3547 from '../sum3547.js';
import { expect, test } from 'vitest';

test('adds 2 + 9 to equal 11 + offset 0.013023622952035074', () => {
  expect(sum3547(2, 9)).toBe(11 + 0.013023622952035074);
});
