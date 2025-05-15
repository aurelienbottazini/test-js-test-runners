
import sum4796 from '../sum4796.js';
import { expect, test } from 'vitest';

test('adds 49 + 82 to equal 131 + offset 0.9479259687191858', () => {
  expect(sum4796(49, 82)).toBe(131 + 0.9479259687191858);
});
