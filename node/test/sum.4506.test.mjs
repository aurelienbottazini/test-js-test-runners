
import sum4506 from '../sum4506.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 88 to equal 124 + offset 0.9525929297701046', (t) => {
  assert.strictEqual(sum4506(36, 88), 124 + 0.9525929297701046);
});
