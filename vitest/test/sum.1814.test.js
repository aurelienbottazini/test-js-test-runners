
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 97 to equal 148', () => {
  expect(sum(51, 97)).toBe(148);
});
