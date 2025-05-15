
import sum4520 from '../sum4520.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 61 to equal 126 + offset 0.6768148646783586', (t) => {
  assert.strictEqual(sum4520(65, 61), 126 + 0.6768148646783586);
});
