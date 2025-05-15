
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 67 to equal 165', () => {
  expect(sum(98, 67)).toBe(165);
});
