
import sum904 from '../sum904.js';
import { expect, test } from 'vitest';

test('adds 77 + 40 to equal 117 + offset 0.5326819616735547', () => {
  expect(sum904(77, 40)).toBe(117 + 0.5326819616735547);
});
