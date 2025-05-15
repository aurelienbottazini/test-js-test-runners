
import sum2246 from '../sum2246.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 34 to equal 91 + offset 0.8091945706264381', (t) => {
  assert.strictEqual(sum2246(57, 34), 91 + 0.8091945706264381);
});
