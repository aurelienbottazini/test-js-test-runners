
import sum4747 from '../sum4747.js';
import { expect, test } from 'vitest';

test('adds 76 + 92 to equal 168 + offset 0.6059934740701747', () => {
  expect(sum4747(76, 92)).toBe(168 + 0.6059934740701747);
});
