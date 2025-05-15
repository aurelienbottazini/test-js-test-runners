
import sum2467 from '../sum2467.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 80 to equal 127 + offset 0.29082047763391305', (t) => {
  assert.strictEqual(sum2467(47, 80), 127 + 0.29082047763391305);
});
