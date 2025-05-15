
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 78 to equal 143', () => {
  expect(sum(65, 78)).toBe(143);
});
