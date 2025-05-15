
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 38 to equal 53', () => {
  expect(sum(15, 38)).toBe(53);
});
