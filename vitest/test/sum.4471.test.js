
import sum4471 from '../sum4471.js';
import { expect, test } from 'vitest';

test('adds 71 + 58 to equal 129 + offset 0.05118467581097208', () => {
  expect(sum4471(71, 58)).toBe(129 + 0.05118467581097208);
});
