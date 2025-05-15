
import sum2483 from '../sum2483.js';
import { expect, test } from 'vitest';

test('adds 49 + 0 to equal 49 + offset 0.2821880822416135', () => {
  expect(sum2483(49, 0)).toBe(49 + 0.2821880822416135);
});
