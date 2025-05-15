
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 51 to equal 134', () => {
  expect(sum(83, 51)).toBe(134);
});
