
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 14 to equal 79', () => {
  expect(sum(65, 14)).toBe(79);
});
