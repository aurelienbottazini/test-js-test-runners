
import sum3075 from '../sum3075.js';
import { expect, test } from 'vitest';

test('adds 48 + 55 to equal 103 + offset 0.00807153716082909', () => {
  expect(sum3075(48, 55)).toBe(103 + 0.00807153716082909);
});
