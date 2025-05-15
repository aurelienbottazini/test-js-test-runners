
import sum3881 from '../sum3881.js';
import { expect, test } from 'vitest';

test('adds 1 + 48 to equal 49 + offset 0.5657713304378493', () => {
  expect(sum3881(1, 48)).toBe(49 + 0.5657713304378493);
});
