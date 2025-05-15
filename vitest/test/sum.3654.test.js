
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 97 to equal 140', () => {
  expect(sum(43, 97)).toBe(140);
});
