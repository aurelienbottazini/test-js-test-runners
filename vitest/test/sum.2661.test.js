
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 76 to equal 140', () => {
  expect(sum(64, 76)).toBe(140);
});
