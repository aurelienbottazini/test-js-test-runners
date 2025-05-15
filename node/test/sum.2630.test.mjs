
import sum2630 from '../sum2630.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 72 to equal 166 + offset 0.11147574686111139', (t) => {
  assert.strictEqual(sum2630(94, 72), 166 + 0.11147574686111139);
});
