
import sum910 from '../sum910.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 25 to equal 102 + offset 0.06429488469232392', (t) => {
  assert.strictEqual(sum910(77, 25), 102 + 0.06429488469232392);
});
