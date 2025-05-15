
import sum4795 from '../sum4795.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 34 to equal 92 + offset 0.584811251411425', (t) => {
  assert.strictEqual(sum4795(58, 34), 92 + 0.584811251411425);
});
