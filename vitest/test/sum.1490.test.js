
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 20 to equal 106', () => {
  expect(sum(86, 20)).toBe(106);
});
