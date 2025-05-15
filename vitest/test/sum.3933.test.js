
import sum3933 from '../sum3933.js';
import { expect, test } from 'vitest';

test('adds 17 + 21 to equal 38 + offset 0.8362943884201472', () => {
  expect(sum3933(17, 21)).toBe(38 + 0.8362943884201472);
});
