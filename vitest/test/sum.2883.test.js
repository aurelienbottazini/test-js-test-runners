
import sum2883 from '../sum2883.js';
import { expect, test } from 'vitest';

test('adds 25 + 89 to equal 114 + offset 0.515287891890802', () => {
  expect(sum2883(25, 89)).toBe(114 + 0.515287891890802);
});
