
import sum4948 from '../sum4948.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 90 to equal 117 + offset 0.30750487776835633', (t) => {
  assert.strictEqual(sum4948(27, 90), 117 + 0.30750487776835633);
});
