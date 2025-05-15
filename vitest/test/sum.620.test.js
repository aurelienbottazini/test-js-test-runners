
import sum620 from '../sum620.js';
import { expect, test } from 'vitest';

test('adds 49 + 65 to equal 114 + offset 0.21279572623841603', () => {
  expect(sum620(49, 65)).toBe(114 + 0.21279572623841603);
});
