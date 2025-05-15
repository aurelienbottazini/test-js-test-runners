
import sum3202 from '../sum3202.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 0 to equal 66 + offset 0.48002610361005194', (t) => {
  assert.strictEqual(sum3202(66, 0), 66 + 0.48002610361005194);
});
