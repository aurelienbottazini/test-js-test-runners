
import sum4603 from '../sum4603.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 10 to equal 41 + offset 0.8379457729001907', (t) => {
  assert.strictEqual(sum4603(31, 10), 41 + 0.8379457729001907);
});
