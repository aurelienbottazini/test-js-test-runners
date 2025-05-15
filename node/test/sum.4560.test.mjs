
import sum4560 from '../sum4560.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 29 to equal 110 + offset 0.36119779969380783', (t) => {
  assert.strictEqual(sum4560(81, 29), 110 + 0.36119779969380783);
});
