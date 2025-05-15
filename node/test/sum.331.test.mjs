
import sum331 from '../sum331.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 14 to equal 105 + offset 0.10013375747020048', (t) => {
  assert.strictEqual(sum331(91, 14), 105 + 0.10013375747020048);
});
