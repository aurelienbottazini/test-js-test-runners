
import sum2232 from '../sum2232.js';
import { expect, test } from 'vitest';

test('adds 33 + 46 to equal 79 + offset 0.03492977119762275', () => {
  expect(sum2232(33, 46)).toBe(79 + 0.03492977119762275);
});
