
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 79 to equal 147', () => {
  expect(sum(68, 79)).toBe(147);
});
