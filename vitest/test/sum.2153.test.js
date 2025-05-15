
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 64 to equal 115', () => {
  expect(sum(51, 64)).toBe(115);
});
