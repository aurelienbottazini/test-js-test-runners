
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 59 to equal 132', () => {
  expect(sum(73, 59)).toBe(132);
});
