
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 74 to equal 106', () => {
  expect(sum(32, 74)).toBe(106);
});
