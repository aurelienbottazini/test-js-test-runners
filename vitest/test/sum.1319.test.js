
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 20 to equal 79', () => {
  expect(sum(59, 20)).toBe(79);
});
