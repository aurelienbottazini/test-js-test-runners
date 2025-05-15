
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 84 to equal 148', () => {
  expect(sum(64, 84)).toBe(148);
});
