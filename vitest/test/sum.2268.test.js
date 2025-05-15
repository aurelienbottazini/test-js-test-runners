
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 83 to equal 110', () => {
  expect(sum(27, 83)).toBe(110);
});
