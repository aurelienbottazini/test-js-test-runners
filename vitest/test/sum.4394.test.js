
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 13 to equal 30', () => {
  expect(sum(17, 13)).toBe(30);
});
