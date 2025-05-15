
import sum3817 from '../sum3817.js';
import { expect, test } from 'vitest';

test('adds 34 + 17 to equal 51 + offset 0.2048460577819491', () => {
  expect(sum3817(34, 17)).toBe(51 + 0.2048460577819491);
});
