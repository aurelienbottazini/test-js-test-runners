
import sum4120 from '../sum4120.js';
import { expect, test } from 'vitest';

test('adds 92 + 41 to equal 133 + offset 0.9933344698104923', () => {
  expect(sum4120(92, 41)).toBe(133 + 0.9933344698104923);
});
