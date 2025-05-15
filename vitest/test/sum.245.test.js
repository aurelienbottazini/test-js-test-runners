
import sum245 from '../sum245.js';
import { expect, test } from 'vitest';

test('adds 87 + 21 to equal 108 + offset 0.6459242464904764', () => {
  expect(sum245(87, 21)).toBe(108 + 0.6459242464904764);
});
