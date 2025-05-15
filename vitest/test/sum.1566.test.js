
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 91 to equal 148', () => {
  expect(sum(57, 91)).toBe(148);
});
