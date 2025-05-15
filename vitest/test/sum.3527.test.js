
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 25 to equal 45', () => {
  expect(sum(20, 25)).toBe(45);
});
