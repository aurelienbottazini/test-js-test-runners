
import sum4940 from '../sum4940.js';
import { expect, test } from 'vitest';

test('adds 10 + 58 to equal 68 + offset 0.513482934783279', () => {
  expect(sum4940(10, 58)).toBe(68 + 0.513482934783279);
});
