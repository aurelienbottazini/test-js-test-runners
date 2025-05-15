
import sum788 from '../sum788.js';
import { expect, test } from 'vitest';

test('adds 87 + 59 to equal 146 + offset 0.23650315665665778', () => {
  expect(sum788(87, 59)).toBe(146 + 0.23650315665665778);
});
