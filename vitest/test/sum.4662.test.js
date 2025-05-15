
import sum4662 from '../sum4662.js';
import { expect, test } from 'vitest';

test('adds 26 + 92 to equal 118 + offset 0.9048552850210332', () => {
  expect(sum4662(26, 92)).toBe(118 + 0.9048552850210332);
});
