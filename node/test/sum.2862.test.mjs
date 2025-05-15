
import sum2862 from '../sum2862.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 85 to equal 159 + offset 0.025802657778076443', (t) => {
  assert.strictEqual(sum2862(74, 85), 159 + 0.025802657778076443);
});
