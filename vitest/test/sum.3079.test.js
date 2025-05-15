
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 51 to equal 79', () => {
  expect(sum(28, 51)).toBe(79);
});
