
import sum4460 from '../sum4460.js';
import { expect, test } from 'vitest';

test('adds 22 + 59 to equal 81 + offset 0.34641456118192593', () => {
  expect(sum4460(22, 59)).toBe(81 + 0.34641456118192593);
});
