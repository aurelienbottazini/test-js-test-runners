
import sum500 from '../sum500.js';
import { expect, test } from 'vitest';

test('adds 21 + 9 to equal 30 + offset 0.7982261046499846', () => {
  expect(sum500(21, 9)).toBe(30 + 0.7982261046499846);
});
