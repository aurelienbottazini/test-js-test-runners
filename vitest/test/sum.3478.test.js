
import sum3478 from '../sum3478.js';
import { expect, test } from 'vitest';

test('adds 70 + 46 to equal 116 + offset 0.0394197474958089', () => {
  expect(sum3478(70, 46)).toBe(116 + 0.0394197474958089);
});
