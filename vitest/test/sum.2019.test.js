
import sum2019 from '../sum2019.js';
import { expect, test } from 'vitest';

test('adds 77 + 70 to equal 147 + offset 0.8561272236202241', () => {
  expect(sum2019(77, 70)).toBe(147 + 0.8561272236202241);
});
