
import sum4592 from '../sum4592.js';
import { expect, test } from 'vitest';

test('adds 49 + 58 to equal 107 + offset 0.7075261323617723', () => {
  expect(sum4592(49, 58)).toBe(107 + 0.7075261323617723);
});
