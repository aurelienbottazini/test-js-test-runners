
import sum1568 from '../sum1568.js';
import { expect, test } from 'vitest';

test('adds 21 + 27 to equal 48 + offset 0.16935281150647696', () => {
  expect(sum1568(21, 27)).toBe(48 + 0.16935281150647696);
});
