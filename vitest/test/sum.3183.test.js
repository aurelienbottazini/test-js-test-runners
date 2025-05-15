
import sum3183 from '../sum3183.js';
import { expect, test } from 'vitest';

test('adds 96 + 44 to equal 140 + offset 0.5584610754195538', () => {
  expect(sum3183(96, 44)).toBe(140 + 0.5584610754195538);
});
