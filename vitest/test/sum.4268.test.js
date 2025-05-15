
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 71 to equal 143', () => {
  expect(sum(72, 71)).toBe(143);
});
