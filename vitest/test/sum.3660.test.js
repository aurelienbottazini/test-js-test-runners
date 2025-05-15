
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 66 to equal 132', () => {
  expect(sum(66, 66)).toBe(132);
});
