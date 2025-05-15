
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 20 to equal 40', () => {
  expect(sum(20, 20)).toBe(40);
});
