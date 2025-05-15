
import sum588 from '../sum588.js';
import { expect, test } from 'vitest';

test('adds 95 + 43 to equal 138 + offset 0.15889557271372146', () => {
  expect(sum588(95, 43)).toBe(138 + 0.15889557271372146);
});
