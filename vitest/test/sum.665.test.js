
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 26 to equal 104', () => {
  expect(sum(78, 26)).toBe(104);
});
