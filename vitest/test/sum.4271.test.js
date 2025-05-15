
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 49 to equal 140', () => {
  expect(sum(91, 49)).toBe(140);
});
