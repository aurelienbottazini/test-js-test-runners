
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 64 to equal 140', () => {
  expect(sum(76, 64)).toBe(140);
});
