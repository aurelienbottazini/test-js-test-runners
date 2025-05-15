
import sum2927 from '../sum2927.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 26 to equal 104 + offset 0.22204550517165744', (t) => {
  assert.strictEqual(sum2927(78, 26), 104 + 0.22204550517165744);
});
