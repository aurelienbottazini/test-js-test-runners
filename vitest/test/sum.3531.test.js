
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 91 to equal 132', () => {
  expect(sum(41, 91)).toBe(132);
});
