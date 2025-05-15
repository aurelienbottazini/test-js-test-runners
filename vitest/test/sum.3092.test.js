
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 44 to equal 79', () => {
  expect(sum(35, 44)).toBe(79);
});
