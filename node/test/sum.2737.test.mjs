
import sum2737 from '../sum2737.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 59 to equal 81 + offset 0.30410944496206194', (t) => {
  assert.strictEqual(sum2737(22, 59), 81 + 0.30410944496206194);
});
