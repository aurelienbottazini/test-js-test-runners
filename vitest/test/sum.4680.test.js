
import sum4680 from '../sum4680.js';
import { expect, test } from 'vitest';

test('adds 67 + 77 to equal 144 + offset 0.3050950947198795', () => {
  expect(sum4680(67, 77)).toBe(144 + 0.3050950947198795);
});
