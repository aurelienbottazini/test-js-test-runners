
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 20 to equal 50', () => {
  expect(sum(30, 20)).toBe(50);
});
