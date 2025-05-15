
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 73 to equal 144', () => {
  expect(sum(71, 73)).toBe(144);
});
