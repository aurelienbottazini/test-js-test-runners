
import sum920 from '../sum920.js';
import { expect, test } from 'vitest';

test('adds 29 + 65 to equal 94 + offset 0.405836408764202', () => {
  expect(sum920(29, 65)).toBe(94 + 0.405836408764202);
});
