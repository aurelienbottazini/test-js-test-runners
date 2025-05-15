
import sum380 from '../sum380.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 90 to equal 103 + offset 0.8644602415844541', (t) => {
  assert.strictEqual(sum380(13, 90), 103 + 0.8644602415844541);
});
