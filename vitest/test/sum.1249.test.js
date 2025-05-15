
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 94 to equal 132', () => {
  expect(sum(38, 94)).toBe(132);
});
