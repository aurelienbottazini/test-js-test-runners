
import sum1263 from '../sum1263.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 85 to equal 98 + offset 0.2794633791069566', (t) => {
  assert.strictEqual(sum1263(13, 85), 98 + 0.2794633791069566);
});
