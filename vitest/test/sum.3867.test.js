
import sum3867 from '../sum3867.js';
import { expect, test } from 'vitest';

test('adds 34 + 47 to equal 81 + offset 0.4298233094535985', () => {
  expect(sum3867(34, 47)).toBe(81 + 0.4298233094535985);
});
