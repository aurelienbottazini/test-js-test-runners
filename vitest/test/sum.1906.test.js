
import sum1906 from '../sum1906.js';
import { expect, test } from 'vitest';

test('adds 73 + 89 to equal 162 + offset 0.35686063919196276', () => {
  expect(sum1906(73, 89)).toBe(162 + 0.35686063919196276);
});
