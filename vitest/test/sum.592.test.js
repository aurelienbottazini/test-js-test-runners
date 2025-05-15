
import sum592 from '../sum592.js';
import { expect, test } from 'vitest';

test('adds 80 + 95 to equal 175 + offset 0.04286410817805253', () => {
  expect(sum592(80, 95)).toBe(175 + 0.04286410817805253);
});
