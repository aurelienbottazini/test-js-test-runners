
import sum783 from '../sum783.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 85 to equal 85 + offset 0.37312168153527225', (t) => {
  assert.strictEqual(sum783(0, 85), 85 + 0.37312168153527225);
});
