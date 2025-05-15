
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 0 to equal 49', () => {
  expect(sum(49, 0)).toBe(49);
});
