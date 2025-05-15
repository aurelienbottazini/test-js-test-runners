
import sum2600 from '../sum2600.js';
import { expect, test } from 'vitest';

test('adds 26 + 29 to equal 55 + offset 0.9195272790363624', () => {
  expect(sum2600(26, 29)).toBe(55 + 0.9195272790363624);
});
