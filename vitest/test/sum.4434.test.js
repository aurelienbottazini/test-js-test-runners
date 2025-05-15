
import sum4434 from '../sum4434.js';
import { expect, test } from 'vitest';

test('adds 23 + 65 to equal 88 + offset 0.4393782487789608', () => {
  expect(sum4434(23, 65)).toBe(88 + 0.4393782487789608);
});
