
import sum946 from '../sum946.js';
import { expect, test } from 'vitest';

test('adds 21 + 63 to equal 84 + offset 0.9126482532864212', () => {
  expect(sum946(21, 63)).toBe(84 + 0.9126482532864212);
});
