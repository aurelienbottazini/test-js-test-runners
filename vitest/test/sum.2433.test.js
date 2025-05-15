
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 15 to equal 86', () => {
  expect(sum(71, 15)).toBe(86);
});
