
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 62 to equal 79', () => {
  expect(sum(17, 62)).toBe(79);
});
