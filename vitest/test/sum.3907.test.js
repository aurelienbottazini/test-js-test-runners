
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 29 to equal 79', () => {
  expect(sum(50, 29)).toBe(79);
});
