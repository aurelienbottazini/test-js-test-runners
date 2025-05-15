
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 91 to equal 165', () => {
  expect(sum(74, 91)).toBe(165);
});
