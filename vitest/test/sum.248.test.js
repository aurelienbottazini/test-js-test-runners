
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 46 to equal 140', () => {
  expect(sum(94, 46)).toBe(140);
});
