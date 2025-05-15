
import sum463 from '../sum463.js';
import { expect, test } from 'vitest';

test('adds 64 + 5 to equal 69 + offset 0.5817565006026734', () => {
  expect(sum463(64, 5)).toBe(69 + 0.5817565006026734);
});
