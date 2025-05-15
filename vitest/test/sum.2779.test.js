
import sum2779 from '../sum2779.js';
import { expect, test } from 'vitest';

test('adds 99 + 50 to equal 149 + offset 0.7176559906226804', () => {
  expect(sum2779(99, 50)).toBe(149 + 0.7176559906226804);
});
