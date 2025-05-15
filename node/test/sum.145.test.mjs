
import sum145 from '../sum145.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 23 to equal 26 + offset 0.5121488200183516', (t) => {
  assert.strictEqual(sum145(3, 23), 26 + 0.5121488200183516);
});
