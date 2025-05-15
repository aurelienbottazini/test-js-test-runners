
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 57 to equal 75', () => {
  expect(sum(18, 57)).toBe(75);
});
