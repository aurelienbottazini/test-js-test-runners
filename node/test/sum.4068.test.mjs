
import sum4068 from '../sum4068.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 49 to equal 112 + offset 0.828527217031666', (t) => {
  assert.strictEqual(sum4068(63, 49), 112 + 0.828527217031666);
});
