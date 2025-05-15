
import sum4237 from '../sum4237.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 16 to equal 114 + offset 0.127253885404361', (t) => {
  assert.strictEqual(sum4237(98, 16), 114 + 0.127253885404361);
});
