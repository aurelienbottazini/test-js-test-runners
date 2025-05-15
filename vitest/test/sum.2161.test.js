
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 82 to equal 148', () => {
  expect(sum(66, 82)).toBe(148);
});
