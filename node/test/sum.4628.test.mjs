
import sum4628 from '../sum4628.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 50 to equal 91 + offset 0.7473700440105495', (t) => {
  assert.strictEqual(sum4628(41, 50), 91 + 0.7473700440105495);
});
