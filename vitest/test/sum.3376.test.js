
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 84 to equal 165', () => {
  expect(sum(81, 84)).toBe(165);
});
