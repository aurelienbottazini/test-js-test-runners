
import sum1433 from '../sum1433.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 64 to equal 118 + offset 0.90196690637536', (t) => {
  assert.strictEqual(sum1433(54, 64), 118 + 0.90196690637536);
});
