
import sum1646 from '../sum1646.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 65 to equal 85 + offset 0.2966226152981837', (t) => {
  assert.strictEqual(sum1646(20, 65), 85 + 0.2966226152981837);
});
