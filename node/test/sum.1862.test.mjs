
import sum1862 from '../sum1862.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 17 to equal 109 + offset 0.5479185936892723', (t) => {
  assert.strictEqual(sum1862(92, 17), 109 + 0.5479185936892723);
});
