
import sum1215 from '../sum1215.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 8 to equal 65 + offset 0.47349536293226635', (t) => {
  assert.strictEqual(sum1215(57, 8), 65 + 0.47349536293226635);
});
