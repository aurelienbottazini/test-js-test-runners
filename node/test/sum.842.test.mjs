
import sum842 from '../sum842.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 61 to equal 66 + offset 0.2782083556003947', (t) => {
  assert.strictEqual(sum842(5, 61), 66 + 0.2782083556003947);
});
