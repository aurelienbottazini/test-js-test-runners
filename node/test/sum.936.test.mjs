
import sum936 from '../sum936.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 44 to equal 94 + offset 0.42374248656186053', (t) => {
  assert.strictEqual(sum936(50, 44), 94 + 0.42374248656186053);
});
