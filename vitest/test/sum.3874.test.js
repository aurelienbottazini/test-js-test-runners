
import sum3874 from '../sum3874.js';
import { expect, test } from 'vitest';

test('adds 41 + 17 to equal 58 + offset 0.2484868422345068', () => {
  expect(sum3874(41, 17)).toBe(58 + 0.2484868422345068);
});
