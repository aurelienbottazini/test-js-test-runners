
import sum3724 from '../sum3724.js';
import { expect, test } from 'vitest';

test('adds 96 + 48 to equal 144 + offset 0.48302435174344915', () => {
  expect(sum3724(96, 48)).toBe(144 + 0.48302435174344915);
});
