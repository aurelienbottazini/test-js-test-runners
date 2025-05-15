
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 97 to equal 132', () => {
  expect(sum(35, 97)).toBe(132);
});
