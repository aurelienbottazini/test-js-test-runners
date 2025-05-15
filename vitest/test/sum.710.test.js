
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 37 to equal 112', () => {
  expect(sum(75, 37)).toBe(112);
});
