
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 97 to equal 185', () => {
  expect(sum(88, 97)).toBe(185);
});
