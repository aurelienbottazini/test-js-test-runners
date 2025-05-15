
import sum4076 from '../sum4076.js';
import { expect, test } from 'vitest';

test('adds 45 + 29 to equal 74 + offset 0.6029451658413071', () => {
  expect(sum4076(45, 29)).toBe(74 + 0.6029451658413071);
});
