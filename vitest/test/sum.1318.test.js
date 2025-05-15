
import sum1318 from '../sum1318.js';
import { expect, test } from 'vitest';

test('adds 89 + 23 to equal 112 + offset 0.18860172177693324', () => {
  expect(sum1318(89, 23)).toBe(112 + 0.18860172177693324);
});
