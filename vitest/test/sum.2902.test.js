
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 76 to equal 130', () => {
  expect(sum(54, 76)).toBe(130);
});
