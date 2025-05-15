
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 90 to equal 165', () => {
  expect(sum(75, 90)).toBe(165);
});
