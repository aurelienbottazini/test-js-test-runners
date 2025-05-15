
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 37 to equal 115', () => {
  expect(sum(78, 37)).toBe(115);
});
