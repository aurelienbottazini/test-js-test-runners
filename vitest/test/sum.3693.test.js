
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 27 to equal 45', () => {
  expect(sum(18, 27)).toBe(45);
});
