
import sum223 from '../sum223.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 63 to equal 88 + offset 0.6463482698575977', (t) => {
  assert.strictEqual(sum223(25, 63), 88 + 0.6463482698575977);
});
