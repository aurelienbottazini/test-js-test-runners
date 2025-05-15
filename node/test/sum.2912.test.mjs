
import sum2912 from '../sum2912.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 12 to equal 12 + offset 0.895799013382653', (t) => {
  assert.strictEqual(sum2912(0, 12), 12 + 0.895799013382653);
});
