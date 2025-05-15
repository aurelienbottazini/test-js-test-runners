
import sum4414 from '../sum4414.js';
import { expect, test } from 'vitest';

test('adds 16 + 91 to equal 107 + offset 0.6578400621605919', () => {
  expect(sum4414(16, 91)).toBe(107 + 0.6578400621605919);
});
