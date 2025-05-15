
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 27 to equal 79', () => {
  expect(sum(52, 27)).toBe(79);
});
