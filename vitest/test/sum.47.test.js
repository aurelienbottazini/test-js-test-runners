
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 70 to equal 130', () => {
  expect(sum(60, 70)).toBe(130);
});
