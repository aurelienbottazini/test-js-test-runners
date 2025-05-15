
import sum2237 from '../sum2237.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 43 to equal 43 + offset 0.6648812111391921', (t) => {
  assert.strictEqual(sum2237(0, 43), 43 + 0.6648812111391921);
});
