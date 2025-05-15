
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 46 to equal 139', () => {
  expect(sum(93, 46)).toBe(139);
});
