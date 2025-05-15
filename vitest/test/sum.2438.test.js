
import sum2438 from '../sum2438.js';
import { expect, test } from 'vitest';

test('adds 56 + 46 to equal 102 + offset 0.8381328807205872', () => {
  expect(sum2438(56, 46)).toBe(102 + 0.8381328807205872);
});
