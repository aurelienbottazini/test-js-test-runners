
import sum1276 from '../sum1276.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 13 to equal 30 + offset 0.6074965698632605', (t) => {
  assert.strictEqual(sum1276(17, 13), 30 + 0.6074965698632605);
});
