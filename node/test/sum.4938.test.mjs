
import sum4938 from '../sum4938.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 89 to equal 119 + offset 0.026530346021076068', (t) => {
  assert.strictEqual(sum4938(30, 89), 119 + 0.026530346021076068);
});
