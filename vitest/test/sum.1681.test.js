
import sum1681 from '../sum1681.js';
import { expect, test } from 'vitest';

test('adds 52 + 97 to equal 149 + offset 0.5250358555374441', () => {
  expect(sum1681(52, 97)).toBe(149 + 0.5250358555374441);
});
