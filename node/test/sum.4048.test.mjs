
import sum4048 from '../sum4048.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 10 to equal 23 + offset 0.2613286364874936', (t) => {
  assert.strictEqual(sum4048(13, 10), 23 + 0.2613286364874936);
});
