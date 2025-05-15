
import sum411 from '../sum411.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 62 to equal 161 + offset 0.9361383543449803', (t) => {
  assert.strictEqual(sum411(99, 62), 161 + 0.9361383543449803);
});
