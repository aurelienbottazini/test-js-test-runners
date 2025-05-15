
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 43 to equal 79', () => {
  expect(sum(36, 43)).toBe(79);
});
