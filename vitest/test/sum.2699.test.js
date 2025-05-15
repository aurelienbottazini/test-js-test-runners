
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 51 to equal 110', () => {
  expect(sum(59, 51)).toBe(110);
});
