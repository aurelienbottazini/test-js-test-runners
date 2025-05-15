
import sum3632 from '../sum3632.js';
import { expect, test } from 'vitest';

test('adds 66 + 99 to equal 165 + offset 0.3245903273433104', () => {
  expect(sum3632(66, 99)).toBe(165 + 0.3245903273433104);
});
