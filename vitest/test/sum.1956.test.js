
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 97 to equal 134', () => {
  expect(sum(37, 97)).toBe(134);
});
