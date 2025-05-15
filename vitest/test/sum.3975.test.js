
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 37 to equal 121', () => {
  expect(sum(84, 37)).toBe(121);
});
