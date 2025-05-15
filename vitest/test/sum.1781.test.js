
import sum1781 from '../sum1781.js';
import { expect, test } from 'vitest';

test('adds 89 + 63 to equal 152 + offset 0.97008988227985', () => {
  expect(sum1781(89, 63)).toBe(152 + 0.97008988227985);
});
