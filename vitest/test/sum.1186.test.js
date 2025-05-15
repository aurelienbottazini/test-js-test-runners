
import sum1186 from '../sum1186.js';
import { expect, test } from 'vitest';

test('adds 27 + 26 to equal 53 + offset 0.6281880096544418', () => {
  expect(sum1186(27, 26)).toBe(53 + 0.6281880096544418);
});
