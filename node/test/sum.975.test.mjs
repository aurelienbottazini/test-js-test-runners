
import sum975 from '../sum975.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 80 to equal 94 + offset 0.3435048742950201', (t) => {
  assert.strictEqual(sum975(14, 80), 94 + 0.3435048742950201);
});
