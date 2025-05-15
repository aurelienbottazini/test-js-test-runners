
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 35 to equal 131', () => {
  expect(sum(96, 35)).toBe(131);
});
