
import sum4380 from '../sum4380.js';
import { expect, test } from 'vitest';

test('adds 53 + 38 to equal 91 + offset 0.3590323566499224', () => {
  expect(sum4380(53, 38)).toBe(91 + 0.3590323566499224);
});
