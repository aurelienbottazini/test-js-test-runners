
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 9 to equal 79', () => {
  expect(sum(70, 9)).toBe(79);
});
