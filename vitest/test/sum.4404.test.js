
import sum4404 from '../sum4404.js';
import { expect, test } from 'vitest';

test('adds 92 + 11 to equal 103 + offset 0.8389011805781947', () => {
  expect(sum4404(92, 11)).toBe(103 + 0.8389011805781947);
});
