
import sum4333 from '../sum4333.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 61 to equal 132 + offset 0.07674362909023602', (t) => {
  assert.strictEqual(sum4333(71, 61), 132 + 0.07674362909023602);
});
