
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 51 to equal 53', () => {
  expect(sum(2, 51)).toBe(53);
});
