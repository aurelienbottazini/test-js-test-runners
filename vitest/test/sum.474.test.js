
import sum474 from '../sum474.js';
import { expect, test } from 'vitest';

test('adds 68 + 96 to equal 164 + offset 0.12342718591457691', () => {
  expect(sum474(68, 96)).toBe(164 + 0.12342718591457691);
});
