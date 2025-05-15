
import sum2752 from '../sum2752.js';
import { expect, test } from 'vitest';

test('adds 2 + 16 to equal 18 + offset 0.8775064707277178', () => {
  expect(sum2752(2, 16)).toBe(18 + 0.8775064707277178);
});
