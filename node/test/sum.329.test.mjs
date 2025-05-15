
import sum329 from '../sum329.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 83 to equal 127 + offset 0.14539688937614936', (t) => {
  assert.strictEqual(sum329(44, 83), 127 + 0.14539688937614936);
});
