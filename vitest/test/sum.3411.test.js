
import sum3411 from '../sum3411.js';
import { expect, test } from 'vitest';

test('adds 92 + 11 to equal 103 + offset 0.513530306725073', () => {
  expect(sum3411(92, 11)).toBe(103 + 0.513530306725073);
});
