
import sum3492 from '../sum3492.js';
import { expect, test } from 'vitest';

test('adds 51 + 51 to equal 102 + offset 0.965461846173683', () => {
  expect(sum3492(51, 51)).toBe(102 + 0.965461846173683);
});
