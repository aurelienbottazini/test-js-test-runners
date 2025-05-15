
import sum4859 from '../sum4859.js';
import { expect, test } from 'vitest';

test('adds 25 + 35 to equal 60 + offset 0.19799830540822183', () => {
  expect(sum4859(25, 35)).toBe(60 + 0.19799830540822183);
});
