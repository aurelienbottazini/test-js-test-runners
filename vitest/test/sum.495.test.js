
import sum495 from '../sum495.js';
import { expect, test } from 'vitest';

test('adds 26 + 86 to equal 112 + offset 0.8029110821096559', () => {
  expect(sum495(26, 86)).toBe(112 + 0.8029110821096559);
});
