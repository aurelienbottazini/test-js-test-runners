
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 62 to equal 122', () => {
  expect(sum(60, 62)).toBe(122);
});
