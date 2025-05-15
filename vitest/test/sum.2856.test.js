
import sum2856 from '../sum2856.js';
import { expect, test } from 'vitest';

test('adds 6 + 15 to equal 21 + offset 0.16879357215055646', () => {
  expect(sum2856(6, 15)).toBe(21 + 0.16879357215055646);
});
