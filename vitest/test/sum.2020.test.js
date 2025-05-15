
import sum2020 from '../sum2020.js';
import { expect, test } from 'vitest';

test('adds 26 + 47 to equal 73 + offset 0.5791691157029267', () => {
  expect(sum2020(26, 47)).toBe(73 + 0.5791691157029267);
});
