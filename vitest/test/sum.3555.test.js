
import sum3555 from '../sum3555.js';
import { expect, test } from 'vitest';

test('adds 18 + 36 to equal 54 + offset 0.9311134353240861', () => {
  expect(sum3555(18, 36)).toBe(54 + 0.9311134353240861);
});
