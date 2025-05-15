
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 39 to equal 104', () => {
  expect(sum(65, 39)).toBe(104);
});
