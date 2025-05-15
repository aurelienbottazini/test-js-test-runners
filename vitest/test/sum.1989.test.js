
import sum1989 from '../sum1989.js';
import { expect, test } from 'vitest';

test('adds 74 + 97 to equal 171 + offset 0.6736234316237912', () => {
  expect(sum1989(74, 97)).toBe(171 + 0.6736234316237912);
});
