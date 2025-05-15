
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 71 to equal 131', () => {
  expect(sum(60, 71)).toBe(131);
});
