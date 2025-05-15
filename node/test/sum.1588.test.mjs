
import sum1588 from '../sum1588.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 62 to equal 124 + offset 0.9702073301556334', (t) => {
  assert.strictEqual(sum1588(62, 62), 124 + 0.9702073301556334);
});
