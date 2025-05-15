
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 95 to equal 181', () => {
  expect(sum(86, 95)).toBe(181);
});
