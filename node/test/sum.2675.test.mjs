
import sum2675 from '../sum2675.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 35 to equal 59 + offset 0.7465777223969339', (t) => {
  assert.strictEqual(sum2675(24, 35), 59 + 0.7465777223969339);
});
