
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 26 to equal 49', () => {
  expect(sum(23, 26)).toBe(49);
});
