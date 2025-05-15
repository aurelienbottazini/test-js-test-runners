
import sum3070 from '../sum3070.js';
import { expect, test } from 'vitest';

test('adds 53 + 26 to equal 79 + offset 0.7254832324965392', () => {
  expect(sum3070(53, 26)).toBe(79 + 0.7254832324965392);
});
