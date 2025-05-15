
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 36 to equal 79', () => {
  expect(sum(43, 36)).toBe(79);
});
