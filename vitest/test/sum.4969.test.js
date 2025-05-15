
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 22 to equal 40', () => {
  expect(sum(18, 22)).toBe(40);
});
