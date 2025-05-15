
import sum2598 from '../sum2598.js';
import { expect, test } from 'vitest';

test('adds 46 + 3 to equal 49 + offset 0.9404516820435652', () => {
  expect(sum2598(46, 3)).toBe(49 + 0.9404516820435652);
});
