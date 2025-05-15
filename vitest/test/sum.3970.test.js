
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 54 to equal 143', () => {
  expect(sum(89, 54)).toBe(143);
});
