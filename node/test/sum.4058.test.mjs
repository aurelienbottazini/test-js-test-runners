
import sum4058 from '../sum4058.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 9 to equal 102 + offset 0.22732469771970454', (t) => {
  assert.strictEqual(sum4058(93, 9), 102 + 0.22732469771970454);
});
