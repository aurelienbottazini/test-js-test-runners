
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 87 to equal 179', () => {
  expect(sum(92, 87)).toBe(179);
});
