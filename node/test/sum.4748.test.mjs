
import sum4748 from '../sum4748.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 26 to equal 65 + offset 0.4566400446737028', (t) => {
  assert.strictEqual(sum4748(39, 26), 65 + 0.4566400446737028);
});
