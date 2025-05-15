
import sum486 from '../sum486.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 34 to equal 67 + offset 0.5321813244401783', (t) => {
  assert.strictEqual(sum486(33, 34), 67 + 0.5321813244401783);
});
