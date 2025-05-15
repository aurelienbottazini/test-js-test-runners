
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 76 to equal 147', () => {
  expect(sum(71, 76)).toBe(147);
});
