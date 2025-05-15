
import sum1774 from '../sum1774.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 77 to equal 141 + offset 0.2579497253339045', (t) => {
  assert.strictEqual(sum1774(64, 77), 141 + 0.2579497253339045);
});
