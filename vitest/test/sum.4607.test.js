
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 70 to equal 148', () => {
  expect(sum(78, 70)).toBe(148);
});
