
import sum2963 from '../sum2963.js';
import { expect, test } from 'vitest';

test('adds 40 + 46 to equal 86 + offset 0.12569644351201348', () => {
  expect(sum2963(40, 46)).toBe(86 + 0.12569644351201348);
});
