
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 65 to equal 89', () => {
  expect(sum(24, 65)).toBe(89);
});
