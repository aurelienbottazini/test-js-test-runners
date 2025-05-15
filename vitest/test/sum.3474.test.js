
import sum3474 from '../sum3474.js';
import { expect, test } from 'vitest';

test('adds 23 + 75 to equal 98 + offset 0.16583798133126804', () => {
  expect(sum3474(23, 75)).toBe(98 + 0.16583798133126804);
});
