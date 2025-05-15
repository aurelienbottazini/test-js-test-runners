
import sum594 from '../sum594.js';
import { expect, test } from 'vitest';

test('adds 40 + 98 to equal 138 + offset 0.00808317662052016', () => {
  expect(sum594(40, 98)).toBe(138 + 0.00808317662052016);
});
