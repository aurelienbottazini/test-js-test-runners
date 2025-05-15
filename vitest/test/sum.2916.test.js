
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 49 to equal 53', () => {
  expect(sum(4, 49)).toBe(53);
});
