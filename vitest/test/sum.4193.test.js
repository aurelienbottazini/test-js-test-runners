
import sum4193 from '../sum4193.js';
import { expect, test } from 'vitest';

test('adds 45 + 96 to equal 141 + offset 0.3170422105196842', () => {
  expect(sum4193(45, 96)).toBe(141 + 0.3170422105196842);
});
