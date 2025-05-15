
import sum512 from '../sum512.js';
import { expect, test } from 'vitest';

test('adds 11 + 61 to equal 72 + offset 0.270635457727034', () => {
  expect(sum512(11, 61)).toBe(72 + 0.270635457727034);
});
