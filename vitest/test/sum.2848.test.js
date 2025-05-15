
import sum2848 from '../sum2848.js';
import { expect, test } from 'vitest';

test('adds 17 + 65 to equal 82 + offset 0.17334552464267794', () => {
  expect(sum2848(17, 65)).toBe(82 + 0.17334552464267794);
});
