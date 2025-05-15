
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 65 to equal 79', () => {
  expect(sum(14, 65)).toBe(79);
});
