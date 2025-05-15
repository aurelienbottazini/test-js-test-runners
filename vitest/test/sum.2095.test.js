
import sum2095 from '../sum2095.js';
import { expect, test } from 'vitest';

test('adds 69 + 60 to equal 129 + offset 0.19211782234943797', () => {
  expect(sum2095(69, 60)).toBe(129 + 0.19211782234943797);
});
