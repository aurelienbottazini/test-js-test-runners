
import sum1477 from '../sum1477.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 54 to equal 99 + offset 0.521528446087569', (t) => {
  assert.strictEqual(sum1477(45, 54), 99 + 0.521528446087569);
});
