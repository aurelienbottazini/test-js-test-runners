
import sum4153 from '../sum4153.js';
import { expect, test } from 'vitest';

test('adds 43 + 70 to equal 113 + offset 0.6513869153204529', () => {
  expect(sum4153(43, 70)).toBe(113 + 0.6513869153204529);
});
