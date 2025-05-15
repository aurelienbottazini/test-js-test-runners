
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 51 to equal 115', () => {
  expect(sum(64, 51)).toBe(115);
});
