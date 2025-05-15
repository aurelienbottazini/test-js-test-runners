
import sum1322 from '../sum1322.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 12 to equal 69 + offset 0.9510348438068715', (t) => {
  assert.strictEqual(sum1322(57, 12), 69 + 0.9510348438068715);
});
