
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 81 to equal 143', () => {
  expect(sum(62, 81)).toBe(143);
});
