
import sum2931 from '../sum2931.js';
import { expect, test } from 'vitest';

test('adds 85 + 50 to equal 135 + offset 0.6106223788740317', () => {
  expect(sum2931(85, 50)).toBe(135 + 0.6106223788740317);
});
