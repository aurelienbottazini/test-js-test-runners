
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 86 to equal 145', () => {
  expect(sum(59, 86)).toBe(145);
});
