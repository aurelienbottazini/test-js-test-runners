
import sum3170 from '../sum3170.js';
import { expect, test } from 'vitest';

test('adds 85 + 93 to equal 178 + offset 0.8037610343512097', () => {
  expect(sum3170(85, 93)).toBe(178 + 0.8037610343512097);
});
