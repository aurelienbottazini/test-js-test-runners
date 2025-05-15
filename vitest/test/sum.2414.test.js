
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 16 to equal 49', () => {
  expect(sum(33, 16)).toBe(49);
});
