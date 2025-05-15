
import sum3600 from '../sum3600.js';
import { expect, test } from 'vitest';

test('adds 14 + 3 to equal 17 + offset 0.4255630080124858', () => {
  expect(sum3600(14, 3)).toBe(17 + 0.4255630080124858);
});
