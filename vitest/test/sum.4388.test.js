
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 32 to equal 89', () => {
  expect(sum(57, 32)).toBe(89);
});
