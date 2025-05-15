
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 7 to equal 60', () => {
  expect(sum(53, 7)).toBe(60);
});
