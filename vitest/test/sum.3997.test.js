
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 70 to equal 140', () => {
  expect(sum(70, 70)).toBe(140);
});
