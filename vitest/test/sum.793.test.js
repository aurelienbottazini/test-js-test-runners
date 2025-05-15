
import sum793 from '../sum793.js';
import { expect, test } from 'vitest';

test('adds 66 + 91 to equal 157 + offset 0.25544881829707144', () => {
  expect(sum793(66, 91)).toBe(157 + 0.25544881829707144);
});
