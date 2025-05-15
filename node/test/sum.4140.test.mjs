
import sum4140 from '../sum4140.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 5 to equal 28 + offset 0.3114058343404734', (t) => {
  assert.strictEqual(sum4140(23, 5), 28 + 0.3114058343404734);
});
