
import sum1779 from '../sum1779.js';
import { expect, test } from 'vitest';

test('adds 69 + 14 to equal 83 + offset 0.7137717166903292', () => {
  expect(sum1779(69, 14)).toBe(83 + 0.7137717166903292);
});
