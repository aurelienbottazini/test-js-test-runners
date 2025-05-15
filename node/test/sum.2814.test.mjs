
import sum2814 from '../sum2814.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 69 to equal 161 + offset 0.8249043889460037', (t) => {
  assert.strictEqual(sum2814(92, 69), 161 + 0.8249043889460037);
});
