
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 27 to equal 112', () => {
  expect(sum(85, 27)).toBe(112);
});
