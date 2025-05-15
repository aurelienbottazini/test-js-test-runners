
import sum1062 from '../sum1062.js';
import { expect, test } from 'vitest';

test('adds 28 + 95 to equal 123 + offset 0.3128461739179096', () => {
  expect(sum1062(28, 95)).toBe(123 + 0.3128461739179096);
});
