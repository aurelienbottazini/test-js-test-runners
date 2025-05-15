
import sum3816 from '../sum3816.js';
import { expect, test } from 'vitest';

test('adds 67 + 36 to equal 103 + offset 0.6639024461787846', () => {
  expect(sum3816(67, 36)).toBe(103 + 0.6639024461787846);
});
