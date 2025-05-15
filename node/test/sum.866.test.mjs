
import sum866 from '../sum866.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 56 to equal 69 + offset 0.4814045180801567', (t) => {
  assert.strictEqual(sum866(13, 56), 69 + 0.4814045180801567);
});
