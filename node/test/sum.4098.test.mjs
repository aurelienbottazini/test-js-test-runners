
import sum4098 from '../sum4098.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 59 to equal 62 + offset 0.27844152916305587', (t) => {
  assert.strictEqual(sum4098(3, 59), 62 + 0.27844152916305587);
});
