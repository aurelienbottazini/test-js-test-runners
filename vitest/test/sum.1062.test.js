
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 70 to equal 115', () => {
  expect(sum(45, 70)).toBe(115);
});
