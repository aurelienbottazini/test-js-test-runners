
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 93 to equal 131', () => {
  expect(sum(38, 93)).toBe(131);
});
