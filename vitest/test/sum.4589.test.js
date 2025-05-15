
import sum4589 from '../sum4589.js';
import { expect, test } from 'vitest';

test('adds 78 + 95 to equal 173 + offset 0.3414092571614603', () => {
  expect(sum4589(78, 95)).toBe(173 + 0.3414092571614603);
});
