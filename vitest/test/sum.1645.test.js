
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 59 to equal 79', () => {
  expect(sum(20, 59)).toBe(79);
});
