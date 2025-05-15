
import sum4515 from '../sum4515.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 19 to equal 45 + offset 0.5152963332549816', (t) => {
  assert.strictEqual(sum4515(26, 19), 45 + 0.5152963332549816);
});
