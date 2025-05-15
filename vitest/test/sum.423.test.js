
import sum423 from '../sum423.js';
import { expect, test } from 'vitest';

test('adds 63 + 29 to equal 92 + offset 0.22411582914800365', () => {
  expect(sum423(63, 29)).toBe(92 + 0.22411582914800365);
});
