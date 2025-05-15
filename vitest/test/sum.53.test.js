
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 52 to equal 148', () => {
  expect(sum(96, 52)).toBe(148);
});
