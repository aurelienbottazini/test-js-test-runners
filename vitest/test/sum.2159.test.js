
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 50 to equal 115', () => {
  expect(sum(65, 50)).toBe(115);
});
