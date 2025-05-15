
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 76 to equal 115', () => {
  expect(sum(39, 76)).toBe(115);
});
