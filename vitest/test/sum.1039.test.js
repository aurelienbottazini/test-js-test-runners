
import sum1039 from '../sum1039.js';
import { expect, test } from 'vitest';

test('adds 3 + 48 to equal 51 + offset 0.9429512644419781', () => {
  expect(sum1039(3, 48)).toBe(51 + 0.9429512644419781);
});
