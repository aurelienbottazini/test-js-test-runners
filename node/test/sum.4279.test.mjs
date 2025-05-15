
import sum4279 from '../sum4279.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 30 to equal 119 + offset 0.4713394427446608', (t) => {
  assert.strictEqual(sum4279(89, 30), 119 + 0.4713394427446608);
});
