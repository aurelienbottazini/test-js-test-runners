
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 74 to equal 131', () => {
  expect(sum(57, 74)).toBe(131);
});
