
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 73 to equal 79', () => {
  expect(sum(6, 73)).toBe(79);
});
