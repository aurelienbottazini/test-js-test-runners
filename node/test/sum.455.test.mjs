
import sum455 from '../sum455.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 13 to equal 104 + offset 0.8564722621597274', (t) => {
  assert.strictEqual(sum455(91, 13), 104 + 0.8564722621597274);
});
