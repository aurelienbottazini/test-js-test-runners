
import sum256 from '../sum256.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 11 to equal 58 + offset 0.7266343675260746', (t) => {
  assert.strictEqual(sum256(47, 11), 58 + 0.7266343675260746);
});
