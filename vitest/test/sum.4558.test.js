
import sum4558 from '../sum4558.js';
import { expect, test } from 'vitest';

test('adds 92 + 46 to equal 138 + offset 0.5396121844700978', () => {
  expect(sum4558(92, 46)).toBe(138 + 0.5396121844700978);
});
