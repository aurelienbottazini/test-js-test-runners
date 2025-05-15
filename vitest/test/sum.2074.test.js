
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 17 to equal 79', () => {
  expect(sum(62, 17)).toBe(79);
});
