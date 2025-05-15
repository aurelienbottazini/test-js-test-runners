
import sum2960 from '../sum2960.js';
import { expect, test } from 'vitest';

test('adds 55 + 10 to equal 65 + offset 0.6754039804102212', () => {
  expect(sum2960(55, 10)).toBe(65 + 0.6754039804102212);
});
