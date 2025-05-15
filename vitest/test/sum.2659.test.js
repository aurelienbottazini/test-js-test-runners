
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 17 to equal 71', () => {
  expect(sum(54, 17)).toBe(71);
});
