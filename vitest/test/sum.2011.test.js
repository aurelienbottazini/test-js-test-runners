
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 51 to equal 104', () => {
  expect(sum(53, 51)).toBe(104);
});
