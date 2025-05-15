
import sum1459 from '../sum1459.js';
import { expect, test } from 'vitest';

test('adds 33 + 86 to equal 119 + offset 0.3422642787207567', () => {
  expect(sum1459(33, 86)).toBe(119 + 0.3422642787207567);
});
