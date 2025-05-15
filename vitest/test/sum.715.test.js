
import sum715 from '../sum715.js';
import { expect, test } from 'vitest';

test('adds 41 + 90 to equal 131 + offset 0.06012898848014625', () => {
  expect(sum715(41, 90)).toBe(131 + 0.06012898848014625);
});
