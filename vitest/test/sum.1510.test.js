
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 75 to equal 115', () => {
  expect(sum(40, 75)).toBe(115);
});
