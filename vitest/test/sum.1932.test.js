
import sum1932 from '../sum1932.js';
import { expect, test } from 'vitest';

test('adds 55 + 7 to equal 62 + offset 0.26328287882335843', () => {
  expect(sum1932(55, 7)).toBe(62 + 0.26328287882335843);
});
