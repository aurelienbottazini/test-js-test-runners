
import sum2520 from '../sum2520.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 73 to equal 134 + offset 0.09229495450548064', (t) => {
  assert.strictEqual(sum2520(61, 73), 134 + 0.09229495450548064);
});
