
import sum711 from '../sum711.js';
import { expect, test } from 'vitest';

test('adds 12 + 52 to equal 64 + offset 0.025972084684315888', () => {
  expect(sum711(12, 52)).toBe(64 + 0.025972084684315888);
});
