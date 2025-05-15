
import sum2713 from '../sum2713.js';
import { expect, test } from 'vitest';

test('adds 74 + 22 to equal 96 + offset 0.9360480803447632', () => {
  expect(sum2713(74, 22)).toBe(96 + 0.9360480803447632);
});
