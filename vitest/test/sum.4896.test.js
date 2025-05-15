
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 67 to equal 148', () => {
  expect(sum(81, 67)).toBe(148);
});
