
import sum4634 from '../sum4634.js';
import { expect, test } from 'vitest';

test('adds 86 + 83 to equal 169 + offset 0.6733089259147371', () => {
  expect(sum4634(86, 83)).toBe(169 + 0.6733089259147371);
});
