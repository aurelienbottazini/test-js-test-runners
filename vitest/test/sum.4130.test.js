
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 71 to equal 110', () => {
  expect(sum(39, 71)).toBe(110);
});
