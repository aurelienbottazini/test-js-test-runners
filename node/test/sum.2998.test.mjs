
import sum2998 from '../sum2998.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 57 to equal 135 + offset 0.24866299488168953', (t) => {
  assert.strictEqual(sum2998(78, 57), 135 + 0.24866299488168953);
});
