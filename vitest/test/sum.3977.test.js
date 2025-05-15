
import sum3977 from '../sum3977.js';
import { expect, test } from 'vitest';

test('adds 66 + 26 to equal 92 + offset 0.42024046355647215', () => {
  expect(sum3977(66, 26)).toBe(92 + 0.42024046355647215);
});
