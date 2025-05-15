
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 66 to equal 165', () => {
  expect(sum(99, 66)).toBe(165);
});
