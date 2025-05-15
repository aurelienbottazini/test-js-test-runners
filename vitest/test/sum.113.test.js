
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 97 to equal 169', () => {
  expect(sum(72, 97)).toBe(169);
});
