
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 83 to equal 165', () => {
  expect(sum(82, 83)).toBe(165);
});
