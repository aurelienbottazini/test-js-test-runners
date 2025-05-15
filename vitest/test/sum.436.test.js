
import sum436 from '../sum436.js';
import { expect, test } from 'vitest';

test('adds 54 + 16 to equal 70 + offset 0.8547330472168962', () => {
  expect(sum436(54, 16)).toBe(70 + 0.8547330472168962);
});
