
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 78 to equal 104', () => {
  expect(sum(26, 78)).toBe(104);
});
