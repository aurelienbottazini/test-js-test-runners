
import sum187 from '../sum187.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 38 to equal 133 + offset 0.10762769571041131', (t) => {
  assert.strictEqual(sum187(95, 38), 133 + 0.10762769571041131);
});
