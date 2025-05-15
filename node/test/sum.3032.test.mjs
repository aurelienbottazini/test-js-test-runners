
import sum3032 from '../sum3032.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 92 to equal 116 + offset 0.10684833331439791', (t) => {
  assert.strictEqual(sum3032(24, 92), 116 + 0.10684833331439791);
});
