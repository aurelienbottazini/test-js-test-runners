
import sum3565 from '../sum3565.js';
import { expect, test } from 'vitest';

test('adds 97 + 4 to equal 101 + offset 0.37043889416042186', () => {
  expect(sum3565(97, 4)).toBe(101 + 0.37043889416042186);
});
