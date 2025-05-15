
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 38 to equal 49', () => {
  expect(sum(11, 38)).toBe(49);
});
