
import sum3425 from '../sum3425.js';
import { expect, test } from 'vitest';

test('adds 64 + 65 to equal 129 + offset 0.44149035042418483', () => {
  expect(sum3425(64, 65)).toBe(129 + 0.44149035042418483);
});
