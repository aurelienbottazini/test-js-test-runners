
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 92 to equal 165', () => {
  expect(sum(73, 92)).toBe(165);
});
