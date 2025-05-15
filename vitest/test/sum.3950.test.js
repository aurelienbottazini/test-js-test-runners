
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 59 to equal 148', () => {
  expect(sum(89, 59)).toBe(148);
});
