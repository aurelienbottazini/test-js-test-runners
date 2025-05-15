
import sum2360 from '../sum2360.js';
import { expect, test } from 'vitest';

test('adds 90 + 51 to equal 141 + offset 0.11722153304551497', () => {
  expect(sum2360(90, 51)).toBe(141 + 0.11722153304551497);
});
