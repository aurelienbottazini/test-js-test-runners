
import sum1036 from '../sum1036.js';
import { expect, test } from 'vitest';

test('adds 47 + 25 to equal 72 + offset 0.6768978335788811', () => {
  expect(sum1036(47, 25)).toBe(72 + 0.6768978335788811);
});
