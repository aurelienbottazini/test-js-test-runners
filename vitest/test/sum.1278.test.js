
import sum1278 from '../sum1278.js';
import { expect, test } from 'vitest';

test('adds 41 + 2 to equal 43 + offset 0.7815095965644182', () => {
  expect(sum1278(41, 2)).toBe(43 + 0.7815095965644182);
});
