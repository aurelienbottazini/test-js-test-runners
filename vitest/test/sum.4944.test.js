
import sum4944 from '../sum4944.js';
import { expect, test } from 'vitest';

test('adds 75 + 61 to equal 136 + offset 0.10400370062226716', () => {
  expect(sum4944(75, 61)).toBe(136 + 0.10400370062226716);
});
