
import sum2382 from '../sum2382.js';
import { expect, test } from 'vitest';

test('adds 82 + 64 to equal 146 + offset 0.5811254830522239', () => {
  expect(sum2382(82, 64)).toBe(146 + 0.5811254830522239);
});
