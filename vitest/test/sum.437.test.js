
import sum437 from '../sum437.js';
import { expect, test } from 'vitest';

test('adds 56 + 4 to equal 60 + offset 0.17056187243593224', () => {
  expect(sum437(56, 4)).toBe(60 + 0.17056187243593224);
});
