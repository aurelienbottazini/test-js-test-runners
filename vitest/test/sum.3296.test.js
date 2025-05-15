
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 3 to equal 89', () => {
  expect(sum(86, 3)).toBe(89);
});
