
import sum256 from '../sum256.js';
import { expect, test } from 'vitest';

test('adds 45 + 62 to equal 107 + offset 0.694404887914116', () => {
  expect(sum256(45, 62)).toBe(107 + 0.694404887914116);
});
