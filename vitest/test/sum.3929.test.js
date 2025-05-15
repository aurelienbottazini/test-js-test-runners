
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 44 to equal 130', () => {
  expect(sum(86, 44)).toBe(130);
});
