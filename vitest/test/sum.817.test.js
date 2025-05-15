
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 72 to equal 89', () => {
  expect(sum(17, 72)).toBe(89);
});
