
import sum1374 from '../sum1374.js';
import { expect, test } from 'vitest';

test('adds 40 + 60 to equal 100 + offset 0.7008011705787568', () => {
  expect(sum1374(40, 60)).toBe(100 + 0.7008011705787568);
});
