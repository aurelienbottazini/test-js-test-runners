
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 4 to equal 53', () => {
  expect(sum(49, 4)).toBe(53);
});
