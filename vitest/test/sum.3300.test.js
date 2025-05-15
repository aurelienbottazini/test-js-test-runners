
import sum3300 from '../sum3300.js';
import { expect, test } from 'vitest';

test('adds 34 + 81 to equal 115 + offset 0.36299739266599174', () => {
  expect(sum3300(34, 81)).toBe(115 + 0.36299739266599174);
});
