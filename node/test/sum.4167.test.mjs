
import sum4167 from '../sum4167.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 97 to equal 196 + offset 0.1928785095390566', (t) => {
  assert.strictEqual(sum4167(99, 97), 196 + 0.1928785095390566);
});
