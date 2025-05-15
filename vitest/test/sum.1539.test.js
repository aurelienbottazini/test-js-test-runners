
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 85 to equal 165', () => {
  expect(sum(80, 85)).toBe(165);
});
