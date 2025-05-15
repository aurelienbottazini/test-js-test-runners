
import sum2937 from '../sum2937.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 66 to equal 67 + offset 0.8631667438260902', (t) => {
  assert.strictEqual(sum2937(1, 66), 67 + 0.8631667438260902);
});
