
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 97 to equal 163', () => {
  expect(sum(66, 97)).toBe(163);
});
