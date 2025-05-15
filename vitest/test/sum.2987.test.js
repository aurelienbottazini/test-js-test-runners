
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 85 to equal 130', () => {
  expect(sum(45, 85)).toBe(130);
});
