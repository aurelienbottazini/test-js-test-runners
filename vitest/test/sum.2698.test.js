
import sum2698 from '../sum2698.js';
import { expect, test } from 'vitest';

test('adds 85 + 4 to equal 89 + offset 0.33531266684994787', () => {
  expect(sum2698(85, 4)).toBe(89 + 0.33531266684994787);
});
