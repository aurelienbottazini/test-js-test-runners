
import sum2277 from '../sum2277.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 51 to equal 65 + offset 0.8174099260492766', (t) => {
  assert.strictEqual(sum2277(14, 51), 65 + 0.8174099260492766);
});
