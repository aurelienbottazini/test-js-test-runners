
import sum2850 from '../sum2850.js';
import { expect, test } from 'vitest';

test('adds 72 + 93 to equal 165 + offset 0.07451326588517482', () => {
  expect(sum2850(72, 93)).toBe(165 + 0.07451326588517482);
});
