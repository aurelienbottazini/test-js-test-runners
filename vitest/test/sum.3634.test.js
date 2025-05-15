
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 70 to equal 90', () => {
  expect(sum(20, 70)).toBe(90);
});
