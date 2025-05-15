
import sum2367 from '../sum2367.js';
import { expect, test } from 'vitest';

test('adds 18 + 64 to equal 82 + offset 0.05973977070724401', () => {
  expect(sum2367(18, 64)).toBe(82 + 0.05973977070724401);
});
