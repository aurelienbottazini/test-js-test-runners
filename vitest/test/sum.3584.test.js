
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 97 to equal 145', () => {
  expect(sum(48, 97)).toBe(145);
});
