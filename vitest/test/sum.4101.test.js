
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 33 to equal 104', () => {
  expect(sum(71, 33)).toBe(104);
});
