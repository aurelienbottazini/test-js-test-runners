
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 62 to equal 112', () => {
  expect(sum(50, 62)).toBe(112);
});
