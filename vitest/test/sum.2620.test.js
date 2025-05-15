
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 65 to equal 148', () => {
  expect(sum(83, 65)).toBe(148);
});
