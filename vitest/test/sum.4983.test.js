
import sum4983 from '../sum4983.js';
import { expect, test } from 'vitest';

test('adds 76 + 32 to equal 108 + offset 0.6944230945979868', () => {
  expect(sum4983(76, 32)).toBe(108 + 0.6944230945979868);
});
