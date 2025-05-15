
import sum1244 from '../sum1244.js';
import { expect, test } from 'vitest';

test('adds 67 + 66 to equal 133 + offset 0.45702426905752425', () => {
  expect(sum1244(67, 66)).toBe(133 + 0.45702426905752425);
});
