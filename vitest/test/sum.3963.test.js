
import sum3963 from '../sum3963.js';
import { expect, test } from 'vitest';

test('adds 76 + 93 to equal 169 + offset 0.23960102362638602', () => {
  expect(sum3963(76, 93)).toBe(169 + 0.23960102362638602);
});
