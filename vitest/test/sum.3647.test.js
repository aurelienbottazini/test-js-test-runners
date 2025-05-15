
import sum3647 from '../sum3647.js';
import { expect, test } from 'vitest';

test('adds 63 + 77 to equal 140 + offset 0.1373603668163289', () => {
  expect(sum3647(63, 77)).toBe(140 + 0.1373603668163289);
});
