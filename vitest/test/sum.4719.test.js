
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 64 to equal 68', () => {
  expect(sum(4, 64)).toBe(68);
});
