
import sum2035 from '../sum2035.js';
import { expect, test } from 'vitest';

test('adds 87 + 88 to equal 175 + offset 0.8504530015276388', () => {
  expect(sum2035(87, 88)).toBe(175 + 0.8504530015276388);
});
