
import sum2053 from '../sum2053.js';
import { expect, test } from 'vitest';

test('adds 80 + 26 to equal 106 + offset 0.1303661673189992', () => {
  expect(sum2053(80, 26)).toBe(106 + 0.1303661673189992);
});
