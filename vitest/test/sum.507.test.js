
import sum507 from '../sum507.js';
import { expect, test } from 'vitest';

test('adds 89 + 93 to equal 182 + offset 0.9482413496922135', () => {
  expect(sum507(89, 93)).toBe(182 + 0.9482413496922135);
});
