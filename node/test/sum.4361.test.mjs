
import sum4361 from '../sum4361.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 47 to equal 80 + offset 0.29088573376419014', (t) => {
  assert.strictEqual(sum4361(33, 47), 80 + 0.29088573376419014);
});
