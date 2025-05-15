
import sum1992 from '../sum1992.js';
import { expect, test } from 'vitest';

test('adds 22 + 33 to equal 55 + offset 0.7934890557223482', () => {
  expect(sum1992(22, 33)).toBe(55 + 0.7934890557223482);
});
