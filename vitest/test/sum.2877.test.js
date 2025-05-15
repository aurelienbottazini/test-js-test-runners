
import sum2877 from '../sum2877.js';
import { expect, test } from 'vitest';

test('adds 67 + 88 to equal 155 + offset 0.08562449895390334', () => {
  expect(sum2877(67, 88)).toBe(155 + 0.08562449895390334);
});
