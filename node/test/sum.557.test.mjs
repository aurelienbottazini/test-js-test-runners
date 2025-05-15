
import sum557 from '../sum557.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 51 to equal 70 + offset 0.3116877060595242', (t) => {
  assert.strictEqual(sum557(19, 51), 70 + 0.3116877060595242);
});
