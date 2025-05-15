
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 26 to equal 79', () => {
  expect(sum(53, 26)).toBe(79);
});
