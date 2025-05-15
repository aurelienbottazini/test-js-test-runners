
import sum4462 from '../sum4462.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 6 to equal 94 + offset 0.11902486392890455', (t) => {
  assert.strictEqual(sum4462(88, 6), 94 + 0.11902486392890455);
});
