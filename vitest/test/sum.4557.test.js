
import sum4557 from '../sum4557.js';
import { expect, test } from 'vitest';

test('adds 13 + 73 to equal 86 + offset 0.7167473037593494', () => {
  expect(sum4557(13, 73)).toBe(86 + 0.7167473037593494);
});
