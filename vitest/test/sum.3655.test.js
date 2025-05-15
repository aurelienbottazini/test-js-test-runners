
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 83 to equal 132', () => {
  expect(sum(49, 83)).toBe(132);
});
