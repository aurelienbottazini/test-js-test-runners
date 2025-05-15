
import sum3098 from '../sum3098.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 98 to equal 187 + offset 0.4324195065422004', (t) => {
  assert.strictEqual(sum3098(89, 98), 187 + 0.4324195065422004);
});
