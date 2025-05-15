
import sum3525 from '../sum3525.js';
import { expect, test } from 'vitest';

test('adds 19 + 98 to equal 117 + offset 0.8222502612903511', () => {
  expect(sum3525(19, 98)).toBe(117 + 0.8222502612903511);
});
