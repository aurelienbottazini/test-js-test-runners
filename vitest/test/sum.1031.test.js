
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 71 to equal 148', () => {
  expect(sum(77, 71)).toBe(148);
});
