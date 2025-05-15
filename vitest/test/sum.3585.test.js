
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 88 to equal 132', () => {
  expect(sum(44, 88)).toBe(132);
});
