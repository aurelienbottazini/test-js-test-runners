
import sum3020 from '../sum3020.js';
import { expect, test } from 'vitest';

test('adds 67 + 85 to equal 152 + offset 0.7541368850729363', () => {
  expect(sum3020(67, 85)).toBe(152 + 0.7541368850729363);
});
