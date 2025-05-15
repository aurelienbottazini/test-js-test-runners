
import sum3902 from '../sum3902.js';
import { expect, test } from 'vitest';

test('adds 3 + 79 to equal 82 + offset 0.6421900286480204', () => {
  expect(sum3902(3, 79)).toBe(82 + 0.6421900286480204);
});
