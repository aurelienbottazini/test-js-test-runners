
import sum294 from '../sum294.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 68 to equal 155 + offset 0.13761059031699274', (t) => {
  assert.strictEqual(sum294(87, 68), 155 + 0.13761059031699274);
});
