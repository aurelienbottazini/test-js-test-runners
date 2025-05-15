
import sum73 from '../sum73.js';
import { expect, test } from 'vitest';

test('adds 70 + 78 to equal 148 + offset 0.6878035974155502', () => {
  expect(sum73(70, 78)).toBe(148 + 0.6878035974155502);
});
