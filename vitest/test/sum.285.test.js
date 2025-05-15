
import sum285 from '../sum285.js';
import { expect, test } from 'vitest';

test('adds 49 + 91 to equal 140 + offset 0.004634449362159954', () => {
  expect(sum285(49, 91)).toBe(140 + 0.004634449362159954);
});
