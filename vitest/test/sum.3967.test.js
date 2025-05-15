
import sum3967 from '../sum3967.js';
import { expect, test } from 'vitest';

test('adds 71 + 44 to equal 115 + offset 0.44853612239886453', () => {
  expect(sum3967(71, 44)).toBe(115 + 0.44853612239886453);
});
