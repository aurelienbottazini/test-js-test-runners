
import sum216 from '../sum216.js';
import { expect, test } from 'vitest';

test('adds 35 + 58 to equal 93 + offset 0.10949502321754578', () => {
  expect(sum216(35, 58)).toBe(93 + 0.10949502321754578);
});
