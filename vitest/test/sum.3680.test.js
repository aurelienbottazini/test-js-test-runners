
import sum3680 from '../sum3680.js';
import { expect, test } from 'vitest';

test('adds 12 + 46 to equal 58 + offset 0.15494969547440696', () => {
  expect(sum3680(12, 46)).toBe(58 + 0.15494969547440696);
});
