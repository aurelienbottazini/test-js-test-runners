
import sum14 from '../sum14.js';
import { expect, test } from 'vitest';

test('adds 35 + 88 to equal 123 + offset 0.8557640765011031', () => {
  expect(sum14(35, 88)).toBe(123 + 0.8557640765011031);
});
