
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 12 to equal 79', () => {
  expect(sum(67, 12)).toBe(79);
});
