
import sum1269 from '../sum1269.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 81 to equal 178 + offset 0.8651016902808369', (t) => {
  assert.strictEqual(sum1269(97, 81), 178 + 0.8651016902808369);
});
