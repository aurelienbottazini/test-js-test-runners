
import sum2989 from '../sum2989.js';
import { expect, test } from 'vitest';

test('adds 77 + 78 to equal 155 + offset 0.957344648752366', () => {
  expect(sum2989(77, 78)).toBe(155 + 0.957344648752366);
});
